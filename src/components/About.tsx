import { Mic, Users, Sparkles, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mic,
      title: "Authentic Voices",
      description: "Real conversations with visionaries, creators, and thought leaders shaping our world",
      color: "from-secondary to-secondary/70"
    },
    {
      icon: Zap,
      title: "Bold Topics",
      description: "We tackle the subjects others avoid, diving deep into what truly matters",
      color: "from-accent to-accent/70"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Listener-driven content that reflects the questions you actually want answered",
      color: "from-secondary to-accent"
    },
    {
      icon: Sparkles,
      title: "Fresh Angles",
      description: "Unique perspectives that challenge conventional wisdom and inspire new thinking",
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2.5 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-secondary tracking-wide">WHAT WE'RE ABOUT</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Beyond the Ordinary
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bring the Hat isn't just another podcast—it's a movement. We're building a space where 
            <span className="text-secondary font-semibold"> bold ideas meet authentic storytelling</span>, 
            creating conversations that stick with you long after you hit pause.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-[var(--shadow-premium)] overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-secondary/20">
            <p className="text-lg text-muted-foreground mb-2">
              Powered by creativity. Driven by passion.
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              owif productions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
