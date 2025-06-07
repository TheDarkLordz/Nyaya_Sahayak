
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, Info, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-12 py-8 md:py-16">
      <header className="space-y-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary">
          Nyaya Sahayak
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-body">
          Your AI-powered guide to understanding Indian law. Ask questions in natural language and get suggestions for relevant legal sections.
        </p>
      </header>

      <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl group">
        <Image 
          src="https://placehold.co/1280x720.png"
          alt="Legal gavel and books"
          data-ai-hint="legal justice"
          fill={true}
          style={{ objectFit: "cover" }}
          className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          priority // Added priority as it's likely LCP
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle className="w-20 h-20 text-white/80" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full pt-8">
        <Link href="/ask" passHref>
          <Button 
            size="lg" 
            className="w-full py-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
            variant="default"
          >
            <Lightbulb className="mr-3 h-7 w-7 text-primary-foreground group-hover:animate-pulse" />
            Ask Our AI Assistant
          </Button>
        </Link>
        <Link href="/instructions" passHref>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full py-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
          >
            <Info className="mr-3 h-7 w-7 text-accent group-hover:animate-pulse" />
            How It Works
          </Button>
        </Link>
      </div>

      <section className="max-w-3xl space-y-4 pt-8">
        <h2 className="font-headline text-3xl font-semibold">Empowering You with Legal Knowledge</h2>
        <p className="font-body text-foreground/70">
          Navigating the complexities of the Indian legal system can be daunting. Nyaya Sahayak aims to simplify this by providing initial guidance and pointing you towards relevant laws based on your queries. It's a starting point for your legal research.
        </p>
        <p className="font-body text-sm text-muted-foreground pt-4">
          <strong>Disclaimer:</strong> Nyaya Sahayak provides information for educational purposes only and is not a substitute for professional legal advice from a qualified lawyer.
        </p>
      </section>
    </div>
  );
}
