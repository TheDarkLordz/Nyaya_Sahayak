import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, BookText } from "lucide-react"; 

interface LawCardProps {
  lawName: string;
  advice: string;
}

export function LawCard({ lawName, advice }: LawCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium font-body flex items-center">
            <Scale className="h-5 w-5 text-muted-foreground mr-2" />
            Suggested Law/Section
          </CardTitle>
        </div>
        <p className="text-lg font-semibold font-body text-primary pt-1">{lawName}</p>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-start mt-2">
          <BookText className="h-5 w-5 text-muted-foreground mr-2 mt-1 shrink-0" />
          <div>
            <p className="text-sm font-semibold font-body text-foreground/90 mb-1">General Guidance:</p>
            <p className="text-sm font-body text-foreground/80">{advice}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
