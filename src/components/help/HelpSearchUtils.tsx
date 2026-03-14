import * as React from "react";
import type { FAQItem } from "@/src/constants/faq";

export function escapeRegExp(s: string) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightText({
    text,
    query,
    className,
}: {
    text: string;
    query: string;
    className?: string;
}) {
    const q = query.trim();
    if (!q) return <span className={className}>{text}</span>;

    const tokens = q
        .split(/\s+/)
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 5);

    if (!tokens.length) return <span className={className}>{text}</span>;

    const pattern = new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "gi");
    const parts = text.split(pattern);

    return (
        <span className={className}>
            {parts.map((p, i) => {
                const isHit = tokens.some((t) => p.toLowerCase() === t.toLowerCase());
                return isHit ? (
                    <mark
                        key={i}
                        className="rounded bg-amber-200/60 px-1 py-0.5 text-slate-900"
                    >
                        {p}
                    </mark>
                ) : (
                    <span key={i}>{p}</span>
                );
            })}
        </span>
    );
}

export function normalize(s: string) {
    return s.toLowerCase().trim();
}

export function charNgrams(s: string, n = 3) {
    const t = normalize(s).replace(/\s+/g, " ");
    const grams: string[] = [];
    if (t.length < n) return grams;
    for (let i = 0; i <= t.length - n; i++) grams.push(t.slice(i, i + n));
    return grams;
}

export function vecFromNgrams(grams: string[]) {
    const m = new Map<string, number>();
    for (const g of grams) m.set(g, (m.get(g) ?? 0) + 1);
    return m;
}

export function cosine(a: Map<string, number>, b: Map<string, number>) {
    let dot = 0;
    let na = 0;
    let nb = 0;

    for (const [, v] of a) na += v * v;
    for (const [, v] of b) nb += v * v;

    for (const [k, va] of a) {
        const vb = b.get(k);
        if (vb) dot += va * vb;
    }

    if (na === 0 || nb === 0) return 0;
    return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export function scoreFAQ(item: FAQItem, q: string) {
    const query = normalize(q);
    if (!query) return 0;

    const hay = normalize(
        [item.q, item.a, item.category, ...(item.tags ?? [])].join(" ")
    );

    let kw = 0;
    if (hay.includes(query)) kw += 0.65;

    const qVec = vecFromNgrams(charNgrams(query, 3));
    const iVec = vecFromNgrams(charNgrams(hay, 3));
    const sem = cosine(qVec, iVec);

    const qTitle = normalize(item.q);
    const titleVec = vecFromNgrams(charNgrams(qTitle, 3));
    const semTitle = cosine(qVec, titleVec);

    return Math.max(kw, sem * 0.8, semTitle * 0.95);
}