import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Subscribe = () => {
  const platforms = [
    { name: "Spotify", icon: "🎵" },
    { name: "Apple Podcasts", icon: "🎧" },
    { name: "YouTube", icon: "▶️" },
    { name: "Google Podcasts", icon: "🔊" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Never Miss an Episode</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Subscribe & Stay Updated
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Get notified when new episodes drop. Choose your favorite platform and join our growing community.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {platforms.map((platform, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-primary/5 hover:border-primary/50"
              >
                <span className="text-3xl">{platform.icon}</span>
                <span className="text-sm font-medium">{platform.name}</span>
              </Button>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Get episode highlights, exclusive content, and behind-the-scenes updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
