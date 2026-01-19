import { Heart, Award, Clock, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cake is crafted with passion and care, using only the finest ingredients.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Soft, moist sponges and rich, delicious fillings that never disappoint.",
    },
    {
      icon: Clock,
      title: "Always Fresh",
      description: "Baked fresh for your special occasion, ensuring the best taste experience.",
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "Unique, personalized decorations tailored to your vision and theme.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">About Natalie Cake World</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Creating Sweet Memories <br />
            <span className="text-primary italic">Since Day One</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Based in the heart of Carmarthen, I transform your sweetest dreams into delicious reality. 
            Each cake is a labor of love, meticulously designed and baked to make your celebrations truly unforgettable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 md:mt-24 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic text-foreground/80 max-w-4xl mx-auto">
            "I bake with great passion and put a lot of heart into it. 
            Your celebration deserves nothing less than extraordinary."
          </blockquote>
          <p className="mt-4 text-primary font-medium">— Natalie</p>
        </div>
      </div>
    </section>
  );
};

export default About;
