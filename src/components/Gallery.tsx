import { useState } from "react";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeKids from "@/assets/cake-kids.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Creations" },
    { id: "wedding", label: "Wedding" },
    { id: "birthday", label: "Birthday" },
    { id: "kids", label: "Kids" },
    { id: "cupcakes", label: "Cupcakes" },
  ];

  const cakes = [
    {
      id: 1,
      image: cakeWedding,
      title: "Elegant Wedding Cake",
      category: "wedding",
      description: "Three-tier masterpiece with sugar flowers",
    },
    {
      id: 2,
      image: cakeBirthday,
      title: "Berry Bliss Birthday",
      category: "birthday",
      description: "Pink buttercream with fresh berries",
    },
    {
      id: 3,
      image: cakeChocolate,
      title: "Chocolate Indulgence",
      category: "birthday",
      description: "Rich chocolate layers with ganache drip",
    },
    {
      id: 4,
      image: cakeKids,
      title: "Magical Unicorn",
      category: "kids",
      description: "Whimsical design for little dreamers",
    },
    {
      id: 5,
      image: cakeCupcakes,
      title: "Rose Petal Cupcakes",
      category: "cupcakes",
      description: "Delicate cupcakes with floral accents",
    },
  ];

  const filteredCakes = activeFilter === "all" 
    ? cakes 
    : cakes.filter(cake => cake.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-medium mb-4">Sweet Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            A Taste of <span className="text-primary italic">My Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse through some of my favorite creations. Each cake tells a unique story of celebration, love, and joy.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCakes.map((cake, index) => (
            <div
              key={cake.id}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-xl font-semibold text-warm-white mb-1">
                  {cake.title}
                </h3>
                <p className="text-warm-white/80 text-sm">
                  {cake.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more? Follow me on Instagram for daily updates!
          </p>
          <a
            href="https://instagram.com/natalie_cakeworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            @natalie_cakeworld
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
