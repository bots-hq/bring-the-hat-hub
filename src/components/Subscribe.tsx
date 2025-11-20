import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Bell } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative group animate-fade-in">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative bg-card border-2 border-border rounded-3xl p-12 md:p-16 text-center shadow-[var(--shadow-premium)]">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
                  <Bell className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold text-primary tracking-wider uppercase">Stay Updated</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Never Miss<br />an Episode
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Subscribe to get notified when new episodes drop. Join our community of listeners 
                  who love authentic conversations.
                </p>
              </div>

              {/* YouTube Subscribe */}
              <div className="mb-12">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-accent hover:shadow-[var(--shadow-glow)] border-0 px-12 h-16 text-xl font-bold group"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@bringthehat?sub_confirmation=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    Subscribe on YouTube
                  </a>
                </Button>
              </div>

              {/* Newsletter */}
              <div className="border-t border-border pt-12">
                <p className="text-lg font-semibold mb-6 text-foreground">
                  Or join our newsletter for exclusive updates
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 h-14 px-6 text-lg border-2 border-border focus:border-primary rounded-2xl"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/40 hover:bg-primary/10 hover:border-primary h-14 px-8 text-lg font-semibold rounded-2xl"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
