"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Avatar,
} from "@mui/material";

import { NAV } from "@/src/constants/navigation";
import { getRentFlowSiteMode } from "@/src/lib/tenant";
import {
  clearCachedSessionUser,
  getCachedSessionUser,
  getSessionUser,
} from "@/src/services/auth/auth.service";
import type { Customer } from "@/src/services/auth/auth.types";

type User = {
  name: string;
  email?: string;
  username?: string;
  avatarUrl?: string;
};

function MobileMenuGlyph({ open }: { open: boolean }) {
  return (
    <Box className="relative block h-4 w-5" aria-hidden="true">
      <Box
        className="absolute left-0 top-[4px] h-[1.5px] w-5 rounded-full bg-[var(--rf-apple-ink)]/75"
        sx={{
          transform: open
            ? "translateY(3px) rotate(45deg)"
            : "translateY(0) rotate(0deg)",
          transition:
            "transform .42s cubic-bezier(0.22, 1, 0.36, 1), background-color .28s ease",
        }}
      />
      <Box
        className="absolute left-0 top-[10px] h-[1.5px] w-5 rounded-full bg-[var(--rf-apple-ink)]/75"
        sx={{
          transform: open
            ? "translateY(-3px) rotate(-45deg)"
            : "translateY(0) rotate(0deg)",
          transition:
            "transform .42s cubic-bezier(0.22, 1, 0.36, 1), background-color .28s ease",
        }}
      />
    </Box>
  );
}

function getDisplayName(user: {
  name?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
}) {
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ");
  return user.name || fullName || user.username || "ผู้ใช้งาน";
}

const useHydrationLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

function mapCustomerToNavbarUser(user: Customer | null): User | null {
  if (!user) return null;

  return {
    name: getDisplayName(user),
    email: user.email,
    username: user.username,
    avatarUrl: user.avatarUrl,
  };
}

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (v: boolean) => () => setOpen(v);
  const [user, setUser] = React.useState<User | null>(null);
  const [authResolved, setAuthResolved] = React.useState(false);

  const siteMode = React.useMemo(() => getRentFlowSiteMode(), []);
  const navItems = React.useMemo(
    () =>
      siteMode === "marketplace"
        ? NAV
        : NAV.filter((item) => item.href !== "/shops"),
    [siteMode]
  );

  useHydrationLayoutEffect(() => {
    const cachedUser = getCachedSessionUser();
    if (!cachedUser) return;

    setUser(mapCustomerToNavbarUser(cachedUser));
    setAuthResolved(true);
  }, []);

  React.useEffect(() => {
    let cancelled = false;

    async function syncSession() {
      try {
        const currentUser = await getSessionUser();
        if (!cancelled) {
          setUser(mapCustomerToNavbarUser(currentUser));
          setAuthResolved(true);
        }
      } catch {
        if (!cancelled) {
          clearCachedSessionUser();
          setUser(null);
          setAuthResolved(true);
        }
      }
    }

    syncSession();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="bg-white/90! backdrop-blur-2xl!"
      sx={{ color: "var(--rf-apple-ink)" }}
    >
      <Container maxWidth="lg">
        <Toolbar className="flex min-h-[52px]! justify-between gap-3 px-0! md:min-h-11! md:gap-4">
          <Box
            component={Link}
            href="/"
            className="flex min-w-0 items-center gap-2 no-underline md:gap-2.5"
          >
            <Box className="relative h-5 w-5 shrink-0">
              <Image
                src="/RentFlow.png"
                alt="RentFlow Logo"
                fill
                className="object-contain"
                priority
              />
            </Box>

            <Box className="flex min-w-0 flex-col">
              <Typography className="apple-nav-brand truncate font-semibold! tracking-[-0.01em] text-[var(--rf-apple-ink)]! leading-none!">
                RentFlow
              </Typography>
              <Typography className="apple-nav-caption mt-0.5! truncate font-medium! leading-none! text-[var(--rf-apple-muted)]!">
                Smart Car Rental
              </Typography>
            </Box>
          </Box>

          <Box
            className="items-center gap-1"
            sx={{
              display: "none",
              "@media (min-width: 801px)": {
                display: "flex",
              },
            }}
          >
              {navItems.map((n) => {
                const active = isActive(n.href);

                return (
                  <Button
                    key={n.href}
                    component={Link}
                    href={n.href}
                    disableElevation
                    className="apple-nav-link min-w-0! rounded-full! px-3.5! py-1.5! !font-normal"
                    sx={{
                      fontWeight: "400 !important",
                      lineHeight: 1.42859,
                      letterSpacing: "-0.016em",
                      color: active
                        ? "var(--rf-apple-ink)"
                        : "var(--rf-apple-muted)",
                      backgroundColor: active
                        ? "rgba(0,0,0,0.06)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: active
                          ? "rgba(0,0,0,0.07)"
                          : "rgba(0,0,0,0.045)",
                        color: "var(--rf-apple-ink)",
                      },
                      transition:
                        "background-color .32s ease, color .32s ease, opacity .32s ease, transform .86s cubic-bezier(0.18,0.9,0.22,1)",
                    }}
                  >
                    {n.label}
                  </Button>
                );
              })}
          </Box>

          <Box
            className="items-center gap-2"
            sx={{
              display: "none",
              minWidth: 228,
              justifyContent: "flex-end",
              "@media (min-width: 801px)": {
                display: "flex",
              },
            }}
          >
              {!authResolved ? (
                <Box className="h-10! w-[228px]! rounded-full! px-0! py-0!">
                  <Box className="flex h-full w-full items-center justify-end gap-2.5">
                    <Box className="h-8 w-8 shrink-0 rounded-full bg-black/[0.1]" />
                    <Box className="min-w-0 flex-1 text-left">
                      <Box className="h-[15px] w-[108px] rounded-full bg-black/[0.11]" />
                      <Box className="mt-1.5 h-[10px] w-[72px] rounded-full bg-black/[0.075]" />
                    </Box>
                  </Box>
                </Box>
              ) : !user ? (
                <>
                  <Button
                    component={Link}
                    href="/login"
                    variant="outlined"
                    className="apple-button-copy rounded-full!"
                    sx={{ px: 2.2, py: 0.65 }}
                  >
                    เข้าสู่ระบบ
                  </Button>

                  <Button
                    component={Link}
                    href="/register"
                    variant="contained"
                    className="apple-button-copy rounded-full! font-semibold!"
                    sx={{
                      px: 2.4,
                      py: 0.65,
                    }}
                  >
                    สมัครสมาชิก
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    href="/profile"
                    disableRipple
                    disableTouchRipple
                    className="h-10! w-[228px]! rounded-full! px-0! py-0!"
                    sx={{
                      backgroundColor: "transparent",
                      border: "0",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                      "&:focus-visible": {
                        outline: "none",
                      },
                      transition:
                        "opacity .32s ease, transform .86s cubic-bezier(0.18,0.9,0.22,1)",
                    }}
                  >
                    <Box className="flex w-full items-center justify-end gap-2.5">
                      <Avatar
                        src={user.avatarUrl || undefined}
                        className="h-8! w-8! bg-[var(--rf-apple-ink)]! text-sm! text-white!"
                      >
                        {user.name[0].toUpperCase()}
                      </Avatar>

                      <Box className="min-w-0 flex-1 text-left">
                        <Typography className="apple-nav-link truncate font-semibold! leading-tight! text-[var(--rf-apple-ink)]!">
                          {user.name}
                        </Typography>
                        <Typography className="apple-nav-caption mt-0.5! truncate font-medium! leading-none! text-[var(--rf-apple-muted)]!">
                          {user.username || "บัญชีผู้ใช้"}
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                </>
              )}
          </Box>

          <Button
            onClick={toggleDrawer(true)}
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            disableElevation
            className="min-w-0! rounded-[12px]! px-2.5! py-2!"
            sx={{
              display: "inline-flex",
              border: "0",
              color: "var(--rf-apple-ink)",
              backgroundColor: "transparent",
              "@media (min-width: 801px)": {
                display: "none",
              },
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <MobileMenuGlyph open={open} />
          </Button>
        </Toolbar>
      </Container>

      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 420, exit: 320 }}
        ModalProps={{ keepMounted: true }}
        sx={{
          "@media (min-width: 801px)": {
            display: "none",
          },
        }}
        PaperProps={{
          sx: {
            width: "100vw",
            maxWidth: "100vw",
            height: "100dvh",
            maxHeight: "100dvh",
            backgroundColor: "var(--rf-apple-surface-soft)",
            borderBottomLeftRadius: "28px",
            borderBottomRightRadius: "28px",
          },
        }}
      >
        <Box className="flex h-full min-h-dvh w-full flex-col bg-[var(--rf-apple-surface-soft)] text-[var(--rf-apple-ink)]">
          <Box className="flex items-center justify-between border-b border-black/10 px-4 py-4 md:px-5">
            <Box className="flex items-center gap-3">
              <Box className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                <Box className="relative h-6 w-6">
                  <Image
                    src="/RentFlow.png"
                    alt="RentFlow Logo"
                    fill
                    className="object-contain"
                  />
                </Box>
              </Box>

              <Box>
                <Typography className="apple-nav-brand font-semibold! tracking-[-0.01em] text-[var(--rf-apple-ink)]! leading-none!">
                  RentFlow
                </Typography>
                <Typography className="apple-nav-caption mt-1! font-medium! leading-none! text-[var(--rf-apple-muted)]!">
                  Smart Car Rental
                </Typography>
              </Box>
            </Box>

            <Button
              onClick={toggleDrawer(false)}
              aria-label="ปิดเมนู"
              disableElevation
              className="min-w-0! rounded-[12px]! px-2.5! py-2!"
              sx={{
                border: "0",
                color: "var(--rf-apple-ink)",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              <MobileMenuGlyph open />
            </Button>
          </Box>

          <List className="flex-1 px-4! py-4! md:px-5! md:py-5!">
            {navItems.map((n) => {
              const active = isActive(n.href);

              return (
                <ListItemButton
                  key={n.href}
                  component={Link}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="mb-2! rounded-[24px]!"
                  sx={{
                    px: 2.2,
                    py: 1.5,
                    backgroundColor: active
                      ? "rgba(0,0,0,0.055)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(0,0,0,0.08)"
                      : "1px solid transparent",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.045)",
                    },
                  }}
                >
                  <ListItemText
                    primary={n.label}
                    primaryTypographyProps={{
                      fontSize: "1.02rem",
                      fontWeight: active ? 700 : 500,
                      letterSpacing: "-0.02em",
                      color: active ? "rgb(15 23 42)" : "rgb(51 65 85)",
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>

          <Box className="flex flex-col gap-3 border-t border-black/10 p-4 md:px-5 md:pb-6">
            {!user ? (
              <>
                <Button
                  component={Link}
                  href="/login"
                  variant="outlined"
                  fullWidth
                  className="rounded-full! py-2.5!"
                  onClick={() => setOpen(false)}
                >
                  เข้าสู่ระบบ
                </Button>

                <Button
                  component={Link}
                  href="/register"
                  variant="contained"
                  fullWidth
                  className="rounded-full! py-2.5! font-semibold!"
                  onClick={() => setOpen(false)}
                >
                  สมัครสมาชิก
                </Button>
              </>
            ) : (
              <>
                <Box className="rounded-[24px] border border-black/10 bg-white px-4 py-3">
                  <Box
                    component={Link}
                    href="/profile"
                    onClick={() => setOpen(false)}
                    sx={{
                      display: "block",
                      transition:
                        "opacity .32s ease, transform .86s cubic-bezier(0.18,0.9,0.22,1)",
                      "&:hover": {
                        backgroundColor: "transparent",
                        transform: "scale(1.006)",
                      },
                    }}
                  >
                    <Box className="flex items-center gap-3">
                      <Avatar
                        src={user.avatarUrl || undefined}
                        className="h-11! w-11! bg-[var(--rf-apple-ink)]! text-white!"
                      >
                        {user.name[0].toUpperCase()}
                      </Avatar>
                      <Box className="min-w-0">
                        <Typography className="apple-nav-link truncate font-semibold! text-[var(--rf-apple-ink)]!">
                          {user.name}
                        </Typography>
                        <Typography className="apple-body-sm break-all text-[var(--rf-apple-muted)]!">
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Button
                  component={Link}
                  href="/profile"
                  variant="outlined"
                  fullWidth
                  className="rounded-full! py-2.5!"
                  onClick={() => setOpen(false)}
                >
                  จัดการบัญชี
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
