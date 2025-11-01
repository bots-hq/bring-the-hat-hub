import { Mic, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mic,
      title: "Authentic Voices",
      description: "Real conversations with fascinating guests from diverse backgrounds"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Topics inspired by our listeners and what matters most to you"
    },
    {
      icon: Sparkles,
      title: "Fresh Perspectives",
      description: "Unique insights that challenge conventional thinking"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About the Show
          </h2>
          <p className="text-lg text-muted-foreground">
            Bring the Hat is your weekly dose of thought-provoking conversations. 
            We dive deep into topics that matter, bringing fresh perspectives and authentic voices to every episode.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
