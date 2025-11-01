import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Calendar, Clock } from "lucide-react";
import podcastCover from "@/assets/podcast-cover.jpg";

const Episodes = () => {
  const episodes = [
    {
      number: "Episode 12",
      title: "The Art of Creative Thinking",
      description: "Exploring how creativity shapes our world with award-winning designer Sarah Chen.",
      date: "Nov 15, 2025",
      duration: "48 min"
    },
    {
      number: "Episode 11",
      title: "Building Communities Online",
      description: "A deep dive into the future of digital communities and human connection.",
      date: "Nov 8, 2025",
      duration: "52 min"
    },
    {
      number: "Episode 10",
      title: "The Science of Habits",
      description: "Understanding behavioral psychology and how small changes create lasting impact.",
      date: "Nov 1, 2025",
      duration: "45 min"
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Latest Episodes
          </h2>
          <p className="text-lg text-muted-foreground">
            Catch up on our most recent conversations
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {episodes.map((episode, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-all">
              <CardHeader className="flex flex-row gap-6 items-start">
                <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                  <img 
                    src={podcastCover} 
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-primary font-medium">{episode.number}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{episode.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{episode.title}</CardTitle>
                  <CardDescription className="text-base">{episode.description}</CardDescription>
                </div>

                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Play className="w-5 h-5" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
