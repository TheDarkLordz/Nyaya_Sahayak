"use client";

import Link from 'next/link';
import { Scale } from 'lucide-react'; // Example icon

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
      <Scale className="h-7 w-7" />
      <span className="font-headline text-2xl font-bold">Nyaya Sahayak</span>
    </Link>
  );
}
