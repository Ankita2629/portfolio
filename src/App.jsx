import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group p-3 rounded-full bg-linear-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm"
            aria-label="Back to top"
            style={{
              animation: "fadeInUp 0.3s ease-out",
            }}
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        )}
      </BrowserRouter>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default App;