"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Lightbulb, Info, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/ask', label: 'Ask AI', icon: Lightbulb },
  { href: '/instructions', label: 'Instructions', icon: Info },
];

// Placeholder for auth status
const isAuthenticated = false; 

export function Navbar() {
  const pathname = usePathname();

  const commonLinkClasses = "transition-colors hover:text-primary";
  const activeLinkClasses = "text-primary font-semibold";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(commonLinkClasses, pathname === link.href && activeLinkClasses)}
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated ? (
            <Link href="/dashboard" className={cn(commonLinkClasses, pathname === '/dashboard' && activeLinkClasses)}>
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/auth/login" className={cn(commonLinkClasses, pathname === '/auth/login' && activeLinkClasses)}>
                Login
              </Link>
              <Button asChild size="sm">
                <Link href="/auth/register">Register</Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Logo />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center space-x-2 rounded-md p-2 text-lg",
                      commonLinkClasses,
                      pathname === link.href && activeLinkClasses,
                      pathname === link.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                ))}
                 {isAuthenticated ? (
                    <Link href="/dashboard" className={cn("flex items-center space-x-2 rounded-md p-2 text-lg", commonLinkClasses, pathname === '/dashboard' && activeLinkClasses, pathname === '/dashboard' && "bg-accent text-accent-foreground")}>
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                  ) : (
                    <>
                      <Link href="/auth/login" className={cn("flex items-center space-x-2 rounded-md p-2 text-lg", commonLinkClasses, pathname === '/auth/login' && activeLinkClasses, pathname === '/auth/login' && "bg-accent text-accent-foreground")}>
                        <LogIn className="h-5 w-5" />
                        <span>Login</span>
                      </Link>
                      <Button asChild className="w-full text-lg py-2">
                        <Link href="/auth/register">
                          <UserPlus className="mr-2 h-5 w-5" />
                          Register
                        </Link>
                      </Button>
                    </>
                  )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
