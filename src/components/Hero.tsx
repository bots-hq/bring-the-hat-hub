import { Button } from "@/components/ui/button";
import { Play, Podcast } from "lucide-react";
import heroImage from "@/assets/podcast-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Podcast className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">New Episodes Weekly</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Bring the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Where conversations get real and ideas come alive. Join us for unfiltered discussions that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Listen Now
            </Button>
            <Button variant="outline" size="lg">
              View Episodes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
