import { Button } from "@/components/ui/button";
import { Bell, Send } from "lucide-react";

const Subscribe = () => {
  const platforms = [
    { name: "Spotify", icon: "🎵", color: "hover:bg-green-500/10 hover:border-green-500/50" },
    { name: "Apple", icon: "🎧", color: "hover:bg-purple-500/10 hover:border-purple-500/50" },
    { name: "YouTube", icon: "▶️", color: "hover:bg-red-500/10 hover:border-red-500/50" },
    { name: "Google", icon: "🔊", color: "hover:bg-blue-500/10 hover:border-blue-500/50" }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/40" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <Bell className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide">NEVER MISS A BEAT</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
              Stay in the Loop
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
              New episodes, exclusive insights, and behind-the-scenes content delivered straight to you.
            </p>
          </div>

          {/* Platform Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {platforms.map((platform, index) => (
              <button
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border-2 border-white/20 ${platform.color} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]`}
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <div className="text-white font-semibold">{platform.name}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-premium)] animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Join the Inner Circle</h3>
              <p className="text-white/80 text-lg">
                Get episode drops, exclusive interviews, and special announcements
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
              />
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/90 hover:shadow-[var(--shadow-glow)] text-primary font-bold border-0 px-8 h-14 text-lg group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-center text-white/60 text-sm mt-6">
              No spam, just great content. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
