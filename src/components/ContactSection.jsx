import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  FileText,
  Loader,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      toast({
        title: "Message Sent! 🎉",
        description:
          "Thank you for reaching out, Ankita will get back to you soon!",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ankita11singh20@gmail.com",
      link: "mailto:ankita11singh20@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-1234567890",
      link: "tel:+911234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gorakhpur, Uttar Pradesh",
      link: "https://maps.google.com/?q=Gorakhpur,Uttar+Pradesh",
    },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com/Ankita2629", name: "GitHub" },
    {
      icon: Linkedin,
      link: "https://linkedin.com/in/ankita-singh-932729309",
      name: "LinkedIn",
    },
    { icon: FileText, link: "#", name: "Portfolio" },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none dark:block hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        {/* Shooting Stars */}
        <div
          className="absolute top-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shoot"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shoot"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out, I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-muted-foreground text-sm mb-1">
                          {info.title}
                        </div>
                        <div className="group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-transparent border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-transparent backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="abc@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-gray-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-full font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/50 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          70% { opacity: 1; }
          100% {
            transform: translateX(-300px) translateY(300px) rotate(-45deg);
            opacity: 0;
          }
        }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-shoot { animation: shoot 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}