import { ArrowUp, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border bg-linear-to-b from-card to-background">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 py-12">
        {/* Main content centered */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Created by text with LinkedIn */}
          <div className="flex items-center gap-2 text-center">
            <span className="text-muted-foreground">Created with</span>
            <Heart
              size={16}
              className="text-primary fill-primary animate-pulse"
            />
            <span className="text-muted-foreground">by</span>
            <a
              href="https://www.linkedin.com/in/ankitaa-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
            >
              Ankita Kumari Singh
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;