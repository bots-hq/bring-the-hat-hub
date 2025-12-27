import { Button } from "@/components/ui/button";
import { Play, Radio, Calendar } from "lucide-react";
import hatLogo from "@/assets/hat-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-background to-secondary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 -right-48 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Logo Section */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-border shadow-2xl">
                <img 
                  src={hatLogo} 
                  alt="Bring the Hat Logo"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="https://www.youtube.com/watch?v=X5sc50hPa0Q&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 hover:bg-primary/20 transition-colors"
            >
              <Radio className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary tracking-wider uppercase">Now Broadcasting</span>
            </a>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Bring the Hat
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Where conversations spark ideas and perspectives shift. 
              <span className="text-primary font-semibold"> Unfiltered. Authentic. Bold.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-glow)] border-0 px-10 h-16 text-xl font-bold"
                asChild
              >
                <a 
                  href="https://www.youtube.com/watch?v=X5sc50hPa0Q&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-7 h-7 transition-transform group-hover:scale-110 fill-white mr-2" />
                  Watch First Episode
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/40 hover:bg-primary/10 hover:border-primary h-16 px-10 text-xl font-semibold"
                asChild
              >
                <a 
                  href="https://www.youtube.com/watch?v=X5sc50hPa0Q&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  Subscribe
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-12 pt-12 text-muted-foreground">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-1">04</div>
                <div className="text-sm uppercase tracking-wider">Episodes</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-black text-secondary mb-1">Weekly</div>
                <div className="text-sm uppercase tracking-wider">New Drops</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-1">Fresh</div>
                <div className="text-sm uppercase tracking-wider">Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
