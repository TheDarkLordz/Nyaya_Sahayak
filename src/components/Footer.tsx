export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Nyaya Sahayak. All rights reserved.</p>
        <p className="mt-1">AI-Powered Indian Legal Information.</p>
      </div>
    </footer>
  );
}
