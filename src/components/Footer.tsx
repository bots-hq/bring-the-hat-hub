import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="border-t border-border bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Bring the Hat
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bold conversations. Fresh perspectives. Authentic storytelling.
            </p>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Powered by{" "}
                <span className="font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  owif productions
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">
                About the Show
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">
                All Episodes
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">
                Guest Submissions
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 flex items-center justify-center hover:from-secondary hover:to-accent hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <div className="pt-4 flex flex-col gap-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Bring the Hat. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Crafted with passion 🎙️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
