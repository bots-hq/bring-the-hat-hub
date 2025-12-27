import { Youtube, Instagram, Mail, Globe, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/watch?v=X5sc50hPa0Q&feature=youtu.be", label: "YouTube" },
    { icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ), href: "https://x.com/originalwifhat", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/bringthehatpodcast?igsh=MTlobHV0MjR3d2xrYQ==", label: "Instagram" },
    { icon: MessageCircle, href: "https://t.me/OWIFTHELASTHAT", label: "Telegram" },
    { icon: Globe, href: "https://owif.fun", label: "Website" }
  ];

  const quickLinks = [
    { name: "Episodes", href: "#episodes" },
    { name: "About", href: "#about" },
    { name: "Subscribe", href: "#subscribe" },
    { name: "Roadmap", href: "https://owif-roadmap.vercel.app", external: true },
    { name: "Dexscreener", href: "https://dexscreener.com/solana/G5qfsAj", external: true },
    { name: "X Community", href: "https://x.com/i/communities/", external: true }
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bring the Hat
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unfiltered conversations, bold ideas, and authentic voices. A podcast by owif productions.
              </p>
              <a 
                href="https://www.instagram.com/p/Br1-USanlm7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Achi's (WIF) Instagram: @ma_babezz
              </a>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Connect With Us</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-border hover:border-primary rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
              <div className="pt-4 space-y-2">
                <a 
                  href="https://www.facebook.com/share/1HU54HSnux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-primary">Bring the Hat</span>. All rights reserved.
            </p>
            <a 
              href="https://x.com/originalwifhat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Powered by <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">owif productions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
