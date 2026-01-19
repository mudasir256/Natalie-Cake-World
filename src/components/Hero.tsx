import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful wedding cake with pink roses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Handcrafted with Love in Carmarthen
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            I Create Cakes <br />
            <span className="text-primary italic">of Your Dreams</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            With my sweets, your party will be incredible, unforgettable and delicious. Every cake is a masterpiece made with passion and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" asChild>
              <a href="#contact">Order Your Cake</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-primary">497+</p>
              <p className="text-sm text-muted-foreground">Cakes Created</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-primary">1.7K</p>
              <p className="text-sm text-muted-foreground">Happy Followers</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-primary">5★</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
