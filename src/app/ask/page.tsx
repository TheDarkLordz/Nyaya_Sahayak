
"use client";

import { useState, type FormEvent, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LawCard } from '@/components/LawCard';
import { suggestRelevantLaws, type SuggestRelevantLawsOutput } from '@/ai/flows/suggest-relevant-laws';
import { Loader2, AlertTriangle, Sparkles, InfoIcon as Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function AskPage() {
  const [legalQuestion, setLegalQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestRelevantLawsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!legalQuestion.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter your legal question.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSuggestions(null);
    setError(null);

    try {
      const result = await suggestRelevantLaws({ legalQuestion });
      if (!isMounted.current) return;

      if (result && result.suggestions) {
        setSuggestions(result);
        if(result.suggestions.length === 0) {
          toast({
            title: "No specific laws found",
            description: "The AI couldn't pinpoint specific laws for your query. Try rephrasing or providing more details.",
          });
        }
      } else {
        console.warn("Received an unexpected response structure from the AI:", result);
        setSuggestions({ suggestions: [] }); 
        toast({
            title: "No suggestions available",
            description: "The AI did not provide specific suggestions. This might be due to the query or an unexpected response.",
          });
      }
    } catch (e) {
      if (!isMounted.current) return;
      console.error("Error fetching suggestions:", e);
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: `Failed to get suggestions: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground">
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8" />
            <CardTitle className="font-headline text-3xl">Ask the AI Legal Assistant</CardTitle>
          </div>
          <CardDescription className="text-primary-foreground/80 pt-1 font-body">
            Describe your legal situation or question below. Our AI will suggest potentially relevant Indian laws or legal sections and provide general guidance.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="legalQuestion" className="block text-sm font-medium text-foreground pb-1 font-body">
                Your Legal Question
              </label>
              <Textarea
                id="legalQuestion"
                value={legalQuestion}
                onChange={(e) => setLegalQuestion(e.target.value)}
                placeholder="e.g., What are the rules for online contract formation in India? or My landlord is evicting me without proper notice."
                rows={6}
                className="rounded-md shadow-sm focus:ring-primary focus:border-primary"
                disabled={isLoading}
              />
              <p className="mt-2 text-xs text-muted-foreground font-body">
                Be as specific as possible for better suggestions.
              </p>
            </div>
            <Button type="submit" className="w-full py-3 text-base rounded-md" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Getting Suggestions...
                </>
              ) : (
                "Suggest Relevant Laws & Guidance"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10 shadow-md">
          <CardHeader className="flex flex-row items-center gap-2 text-destructive">
            <AlertTriangle className="h-6 w-6" />
            <CardTitle className="font-headline text-xl">An Error Occurred</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive font-body">{error}</p>
          </CardContent>
        </Card>
      )}

      {suggestions && suggestions.suggestions.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              AI-Suggested Laws & Guidance
            </CardTitle>
            <CardDescription className="font-body">
              Based on your question, here are some potentially relevant laws and general guidance. This is not legal advice.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestions.suggestions.map((suggestion, index) => (
              <LawCard key={index} lawName={suggestion.lawName} advice={suggestion.advice} />
            ))}
          </CardContent>
        </Card>
      )}
      
      {suggestions && suggestions.suggestions.length === 0 && !error && !isLoading && (
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Info className="h-6 w-6 text-muted-foreground" />
              No Specific Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-body text-muted-foreground">
              The AI could not identify specific laws or provide guidance based on your query. You might want to:
            </p>
            <ul className="list-disc list-inside font-body text-muted-foreground mt-2 space-y-1">
              <li>Rephrase your question.</li>
              <li>Provide more specific details.</li>
              <li>Broaden your query.</li>
            </ul>
            <p className="font-body text-muted-foreground mt-3">
              If the problem persists, the AI might be experiencing difficulties.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
