import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const Episodes = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-6 py-3 mb-8">
            <Play className="w-5 h-5 text-secondary" />
            <span className="text-sm font-bold text-secondary tracking-wider uppercase">First Episode</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Watch Now
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Our inaugural conversation is live
          </p>
        </div>

        {/* Featured Episode */}
        <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500" />
            
            {/* Card */}
            <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
              {/* Video Container */}
              <div className="aspect-video w-full bg-muted relative overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/X5sc50hPa0Q"
                  title="Bring the Hat - Episode 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Episode Info */}
              <div className="p-10 md:p-12 space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-primary">Episode 01</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-black leading-tight group-hover:text-primary transition-colors duration-300">
                      Our First Conversation
                    </h3>
                    
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Welcome to Bring the Hat! Join us for our very first episode where we dive deep into unfiltered conversations, 
                      share bold ideas, and explore new perspectives. This is just the beginning of an exciting journey.
                    </p>
                  </div>

                  <Button 
                    size="lg"
                    className="flex-shrink-0 bg-gradient-to-r from-secondary to-accent hover:shadow-[var(--shadow-glow)] border-0 w-16 h-16 rounded-full p-0 group-hover:scale-110 transition-transform duration-300"
                    asChild
                  >
                    <a 
                      href="https://youtu.be/X5sc50hPa0Q?si=z4npISwMwW0AxaIv" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-7 h-7 text-white" />
                    </a>
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary"
                    asChild
                  >
                    <a 
                      href="https://youtu.be/X5sc50hPa0Q?si=z4npISwMwW0AxaIv" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch on YouTube
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-secondary/30 hover:bg-secondary/10 hover:border-secondary"
                  >
                    Share Episode
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-lg font-semibold text-muted-foreground mb-2">More Episodes Coming Soon</p>
            <p className="text-sm text-muted-foreground">Subscribe to never miss a conversation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
