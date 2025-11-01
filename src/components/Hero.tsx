import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/podcast-hero-new.jpg";
import hatLogo from "@/assets/hat-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary/30">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-5 py-2.5">
              <Sparkles className="w-4 h-4 text-secondary animate-glow" />
              <span className="text-sm font-semibold text-secondary tracking-wide">WEEKLY EPISODES</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                Bring the<br />
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-glow">
                  Hat
                </span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl font-light">
              Unfiltered conversations that challenge perspectives. 
              <span className="text-secondary font-semibold"> Bold ideas</span>, real stories, authentic voices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group bg-gradient-to-r from-secondary to-secondary/90 hover:shadow-[var(--shadow-glow)] text-white border-0 px-8 h-14 text-lg font-bold"
              >
                <Play className="w-6 h-6 transition-transform group-hover:scale-110 fill-white" />
                Listen Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 h-14 px-8 text-lg"
              >
                Explore Episodes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>100+ Episodes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>50K+ Listeners</span>
              </div>
            </div>
          </div>

          {/* Right Column - Logo/Visual */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent blur-3xl opacity-50 animate-pulse" />
              
              {/* Logo Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-[var(--shadow-premium)]">
                <img 
                  src={hatLogo} 
                  alt="Bring the Hat Logo"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
