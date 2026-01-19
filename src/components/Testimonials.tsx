import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jana Moussaoui",
      date: "5 months ago",
      rating: 5,
      text: "I placed a last minute emergency order just ONE DAY in advance, and she went above and beyond to accommodate it. The cake was exceptional - soft, moist, and full of flavor. The filling was rich and delicious, not overly sweet. Without a doubt, it's the best we've had in the UK so far!",
      highlight: "The best we've had in the UK",
    },
    {
      id: 2,
      name: "Halina Stachura",
      date: "2 years ago",
      rating: 5,
      text: "Natalia is a very nice, friendly and very helpful person. She bakes beautifully tasty cakes with great passion and puts a lot of heart into it. I have tried many cakes from her and each time I was pleasantly surprised by the taste and appearance. She always explains everything thoroughly!",
      highlight: "Bakes with great passion and heart",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Happy Customers</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            What People <span className="text-primary italic">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it. Here's what my wonderful customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Highlight */}
              <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 italic">
                "{testimonial.highlight}"
              </p>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <p className="font-display text-4xl font-semibold text-primary">5.0</p>
            <div className="flex gap-1 justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <p className="font-display text-4xl font-semibold text-primary">100%</p>
            <p className="text-sm text-muted-foreground mt-2">Satisfaction</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <p className="font-display text-4xl font-semibold text-primary">170+</p>
            <p className="text-sm text-muted-foreground mt-2">Followers on Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
