import { Youtube, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@bringthehat", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@bringthehat.com", label: "Email" }
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
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Episodes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Connect With Us</h4>
              <div className="flex gap-4">
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
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-primary">Bring the Hat</span>. All rights reserved.
            </p>
            <p>
              Powered by <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">owif productions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
