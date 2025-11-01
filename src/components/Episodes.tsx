import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, TrendingUp } from "lucide-react";
import podcastCover from "@/assets/hat-logo.jpg";

const Episodes = () => {
  const episodes = [
    {
      number: "12",
      title: "The Art of Creative Rebellion",
      guest: "Sarah Chen, Award-Winning Designer",
      description: "How breaking design rules led to revolutionary user experiences and a new creative philosophy.",
      date: "Nov 15, 2025",
      duration: "48 min",
      trending: true
    },
    {
      number: "11",
      title: "Digital Communities, Real Impact",
      guest: "Marcus Rivera, Community Builder",
      description: "Building authentic connections in the digital age and the future of online human interaction.",
      date: "Nov 8, 2025",
      duration: "52 min",
      trending: true
    },
    {
      number: "10",
      title: "The Psychology of Transformation",
      guest: "Dr. Elena Kovač, Behavioral Scientist",
      description: "Understanding how tiny behavioral shifts create massive life changes backed by neuroscience.",
      date: "Nov 1, 2025",
      duration: "45 min",
      trending: false
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2.5 mb-6">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary tracking-wide">LATEST DROPS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Recent Episodes
          </h2>
          <p className="text-xl text-muted-foreground">
            Fresh conversations, bold insights
          </p>
        </div>

        {/* Episodes List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {episodes.map((episode, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl border border-border hover:border-secondary/50 transition-all duration-500 overflow-hidden hover:shadow-[var(--shadow-premium)]">
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 flex flex-col md:flex-row gap-6 items-start">
                  {/* Episode Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-28 md:h-28">
                      <img 
                        src={podcastCover} 
                        alt={episode.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/60 rounded-2xl flex items-center justify-center group-hover:from-secondary/70 group-hover:to-accent/70 transition-all duration-500">
                        <span className="text-3xl font-black text-white">#{episode.number}</span>
                      </div>
                      {episode.trending && (
                        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          HOT
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{episode.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-secondary transition-colors duration-300">
                      {episode.title}
                    </h3>
                    
                    <p className="text-secondary font-semibold">
                      with {episode.guest}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {episode.description}
                    </p>
                  </div>

                  {/* Play Button */}
                  <Button 
                    size="lg"
                    className="flex-shrink-0 bg-gradient-to-r from-secondary to-secondary/90 hover:shadow-[var(--shadow-glow)] text-white border-0 w-14 h-14 rounded-full p-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-6 h-6 fill-white" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-secondary/30 hover:bg-secondary/10 hover:border-secondary text-lg px-8 h-14"
          >
            Browse All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
