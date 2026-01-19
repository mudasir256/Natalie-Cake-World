import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7476 357655",
      href: "tel:+447476357655",
    },
    {
      icon: Mail,
      label: "Email",
      value: "natalie.cakeworld@gmail.com",
      href: "mailto:natalie.cakeworld@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Carmarthen, Carmarthenshire",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/natalie_cakeworld",
      handle: "@natalie_cakeworld",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/natalie.cakeworld",
      handle: "Natalie Cake World",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Let's Create Your <span className="text-primary italic">Dream Cake</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to order? Have questions? I'd love to hear from you! 
            Reach out and let's make your celebration unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Note */}
              <div className="mt-8 pt-6 border-t border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Order in Advance</p>
                  <p className="text-sm text-muted-foreground">
                    For best results, please order at least 3-5 days in advance. 
                    Rush orders may be available – just ask!
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Follow My Journey
              </h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <social.icon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.handle}
                      </p>
                      <p className="text-sm text-muted-foreground">{social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Order CTA */}
          <div className="bg-card-gradient rounded-2xl p-8 md:p-10 shadow-card border border-primary/10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-8">
              The easiest way to discuss your cake requirements is to give me a call or send a message. 
              I'll be happy to discuss your ideas, provide quotes, and answer any questions.
            </p>

            <div className="space-y-4">
              <Button size="lg" className="w-full" asChild>
                <a href="tel:+447476357655" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +44 7476 357655
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="mailto:natalie.cakeworld@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">What to Include:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Date of your event
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Number of servings needed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Theme or design ideas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Flavor preferences
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Any dietary requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
