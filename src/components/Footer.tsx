const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Bring the Hat</h3>
            <p className="text-sm text-muted-foreground">
              Powered by <span className="font-semibold text-foreground">owif productions</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Episodes
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bring the Hat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
