import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="font-headline text-4xl font-bold text-primary">Admin Dashboard</h1>
        <p className="text-lg text-foreground/80 font-body">Manage laws and application settings.</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Upload New Law Corpus</CardTitle>
          <CardDescription className="font-body">
            Upload text files or PDFs containing Indian laws. These will be processed and added to the AI&apos;s knowledge base.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4 p-8 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary transition-colors">
            <Upload className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground font-body">Drag & drop files here or click to browse</p>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Select Files
            </Button>
            <p className="text-xs text-muted-foreground font-body">Supported formats: .txt, .pdf</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Manage Existing Laws</CardTitle>
          <CardDescription className="font-body">
            View, edit, or delete laws currently in the system. (This section is a placeholder for future functionality)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-body py-8 text-center">
            Law management interface will be available here.
          </p>
        </CardContent>
      </Card>

      <div className="text-center pt-4">
        <Button variant="destructive">Log Out</Button>
      </div>
    </div>
  );
}
