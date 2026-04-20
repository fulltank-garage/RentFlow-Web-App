import type { NextConfig } from "next";

function apiImageRemotePattern() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  try {
    const url = new URL(apiUrl);

    return {
      protocol: url.protocol.replace(":", "") as "http" | "https",
      hostname: url.hostname,
      port: url.port,
      pathname: "/**",
    };
  } catch {
    return {
      protocol: "http" as const,
      hostname: "localhost",
      port: "8080",
      pathname: "/**",
    };
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [apiImageRemotePattern()],
  },
};

export default nextConfig;
