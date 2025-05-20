import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  type?: "newsletter" | "demo";
}

export function CTASection({ 
  title, 
  description, 
  buttonText,
  type = "demo" 
}: CTASectionProps) {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8 md:text-lg">{description}</p>
          
          {type === "newsletter" ? (
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background"
              />
              <Button className="whitespace-nowrap glow-hover">{buttonText}</Button>
            </div>
          ) : (
            <Button size="lg" className="glow-hover">{buttonText}</Button>
          )}
        </div>
      </div>
    </section>
  );
}