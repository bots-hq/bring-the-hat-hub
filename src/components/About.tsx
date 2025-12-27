import { Mic2, Users, Sparkles, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mic2,
      title: "Unfiltered Voices",
      description: "Real conversations without the script. We dive deep into topics that matter."
    },
    {
      icon: Users,
      title: "Diverse Perspectives",
      description: "Guests from all walks of life sharing their unique insights and experiences."
    },
    {
      icon: Sparkles,
      title: "Bold Ideas",
      description: "Exploring unconventional thoughts and challenging the status quo."
    },
    {
      icon: Target,
      title: "Authentic Stories",
      description: "No filters, no pretense—just honest storytelling at its finest."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%),radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              About the Show
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="font-bold text-primary">Bring the Hat</span> is a podcast that brings you 
              raw, authentic conversations with fascinating people. We explore ideas, share stories, 
              and challenge perspectives—one episode at a time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 h-full">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://x.com/originalwifhat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-card to-card/50 border-2 border-border rounded-3xl p-10 hover:border-primary/50 transition-colors"
            >
              <p className="text-xl text-muted-foreground mb-4">
                Powered by
              </p>
              <p className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                owif productions
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
