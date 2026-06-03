import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Loader,
  Heart,
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
      value: "+91-6202456608",
      link: "tel:+916202456608",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gorakhpur, Uttar Pradesh",
      link: "https://maps.google.com/?q=Gorakhpur,Uttar+Pradesh",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/ankita-singhhh",
      name: "GitHub",
      color: "hover:text-white hover:border-white/30",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ankitaa-singh",
      name: "LinkedIn",
      color: "hover:text-white hover:border-white/30",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen py-32 px-4 relative overflow-hidden"
    >
      {/* Background decoration orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-orb-1" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-white/5 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/5 mb-4">
            <Heart className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Have an opportunity or project? Shoot me a message and let's collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">
                Registry Channels
              </h3>
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
                      <div className="p-3.5 bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300 rounded-xl">
                        <Icon className="w-5 h-5 text-slate-300" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold mb-0.5">
                          {info.title}
                        </div>
                        <div className="text-slate-200 group-hover:text-white transition-colors font-bold text-sm">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Node Connections
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3.5 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (7 cols) */}
          <div className="lg:col-span-7 modern-card rounded-2xl p-8 border border-white/5 text-left">
            <h3 className="text-lg font-bold mb-6 text-white">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-xl focus:outline-none focus:border-white/20 transition-all placeholder:text-slate-600 text-white font-medium text-sm"
                  placeholder="Console Name"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-xl focus:outline-none focus:border-white/20 transition-all placeholder:text-slate-600 text-white font-medium text-sm"
                  placeholder="address@domain.com"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-bold">
                  Message Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-950/60 border border-white/10 rounded-xl focus:outline-none focus:border-white/20 transition-all placeholder:text-slate-600 text-white font-medium text-sm resize-none"
                  placeholder="Enter message details here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin inline-block mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 inline-block mr-2" />
                    Transmit Signal
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}