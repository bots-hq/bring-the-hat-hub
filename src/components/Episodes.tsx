import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const episodes = [
  {
    id: 1,
    title: "Our First Conversation",
    description: "Welcome to Bring the Hat! Join us for our very first episode where we dive deep into unfiltered conversations, share bold ideas, and explore new perspectives.",
    youtubeId: "X5sc50hPa0Q",
    youtubeUrl: "https://www.youtube.com/watch?v=X5sc50hPa0Q&feature=youtu.be"
  },
  {
    id: 2,
    title: "Episode 2",
    description: "Continuing our journey with more authentic conversations and bold ideas. Tune in for another unfiltered discussion.",
    youtubeId: "g9Izi8tXx7Q",
    youtubeUrl: "https://youtu.be/g9Izi8tXx7Q?si=OYXWwFHEUt-_8KOe"
  },
  {
    id: 3,
    title: "Episode 3",
    description: "More perspectives, more stories, more authentic voices. Join us for another exciting episode.",
    youtubeId: "Jxi_AdJ9Dk0",
    youtubeUrl: "https://youtu.be/Jxi_AdJ9Dk0?si=zQq7qdlmtO2-_Wk5"
  },
  {
    id: 4,
    title: "Episode 4",
    description: "The latest episode of Bring the Hat. Fresh content, fresh ideas, and fresh conversations.",
    youtubeId: "Qm8NR9gD0s4",
    youtubeUrl: "https://youtu.be/Qm8NR9gD0s4?si=AWXJ7_CDhAUx6Jwo"
  }
];

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
            <span className="text-sm font-bold text-secondary tracking-wider uppercase">All Episodes</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Watch Now
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Catch up on all our conversations
          </p>
        </div>

        {/* Episodes Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-500" />
                
                {/* Card */}
                <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                  {/* Video Container */}
                  <div className="aspect-video w-full bg-muted relative overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                      title={`Bring the Hat - ${episode.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Episode Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                          <span className="text-sm font-bold text-primary">Episode {String(episode.id).padStart(2, '0')}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:text-primary transition-colors duration-300">
                          {episode.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {episode.description}
                        </p>
                      </div>

                      <Button 
                        size="lg"
                        className="flex-shrink-0 bg-gradient-to-r from-secondary to-accent hover:shadow-[var(--shadow-glow)] border-0 w-12 h-12 rounded-full p-0 group-hover:scale-110 transition-transform duration-300"
                        asChild
                      >
                        <a 
                          href={episode.youtubeUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary"
                        asChild
                      >
                        <a 
                          href={episode.youtubeUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch on YouTube
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Coming Soon */}
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
