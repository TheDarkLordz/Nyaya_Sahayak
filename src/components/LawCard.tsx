import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react"; // Example icon

interface LawCardProps {
  lawName: string;
}

export function LawCard({ lawName }: LawCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium font-body">
          Suggested Law/Section
        </CardTitle>
        <Scale className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold font-body text-primary">{lawName}</p>
      </CardContent>
    </Card>
  );
}
