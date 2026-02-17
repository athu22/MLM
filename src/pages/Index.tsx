import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Shield, ArrowRight, X, Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Star, TrendingUp, Award, Package } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {

  const features = [
    {
      icon: TrendingUp,
      title: "Binary MLM System",
      description: "Advanced binary compensation plan with unlimited earning potential"
    },
    {
      icon: Award,
      title: "Rank & Rewards",
      description: "Multiple rank levels with attractive salary and benefits"
    },
    {
      icon: Package,
      title: "Quality Products",
      description: "Premium health, wellness and beauty products"
    },
    {
      icon: Users,
      title: "Team Support",
      description: "Comprehensive training and 24/7 support system"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      rank: "Post Stockist",
      content: "Jample Life has transformed my life. The binary system and quality products helped me achieve financial freedom.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Priya Patel",
      rank: "Gold Stockist", 
      content: "Excellent support system and amazing products. I'm proud to be part of this growing family.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Amit Kumar",
      rank: "Silver Stockist",
      content: "The training and mentorship helped me build a successful network. Highly recommended!",
      rating: 5,
      image: "👨‍💻"
    }
  ];

  const products = [
    { 
      name: "Smart Watch Pro", 
      price: "₹8,999", 
      category: "Electronics", 
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300",
      originalPrice: "₹12,999",
      discount: "31% OFF"
    },
    { 
      name: "Premium Perfume Set", 
      price: "₹2,999", 
      category: "Beauty", 
      image: "https://images.unsplash.com/photo-15946318931b8b5a760511846?w=300",
      originalPrice: "₹4,999",
      discount: "40% OFF"
    },
    { 
      name: "Loreal Paris Skincare", 
      price: "₹1,899", 
      category: "Beauty", 
      image: "https://images.unsplash.com/photo-1596462502278-27d035a59034?w=300",
      originalPrice: "₹2,999",
      discount: "37% OFF"
    },
    { 
      name: "Wireless Earbuds", 
      price: "₹3,499", 
      category: "Electronics", 
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      originalPrice: "₹5,999",
      discount: "42% OFF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary font-heading text-2xl font-bold text-primary-foreground">
              JL
            </div>
            <h1 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-6xl">
              Welcome to Jample Life
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Transform your life with our advanced binary MLM system. Join thousands of successful entrepreneurs building their dreams with quality products and unlimited earning potential.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <a 
                href="#get-started"
                className="rounded-lg bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Get Started Now <ArrowRight className="h-5 w-5" />
              </a>
              <Link 
                to="/products" 
                className="rounded-lg border border-border bg-card px-8 py-3 text-lg font-medium text-foreground hover:bg-muted transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Jample Life?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide the best platform for your network marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Premium Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-quality health, wellness and beauty products
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all">
                {/* Product Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'; // fallback image
                    }}
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                    {product.discount}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground text-center">{product.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground text-center">{product.category}</p>
                  
                  {/* Pricing */}
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                    <p className="text-sm text-muted-foreground line-through">{product.originalPrice}</p>
                  </div>
                  
                  {/* View Products Button */}
                  <div className="mt-4 text-center">
                    <Link 
                      to="/products"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View All Products <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful members
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.rank}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your journey? Contact us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 1800-123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">support@jamplelife.com</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Office</h3>
              <p className="text-sm text-muted-foreground">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-heading text-sm font-bold text-primary-foreground">
                  JL
                </div>
                <span className="font-heading text-xl font-bold text-foreground">Jample Life</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transform your life with network marketing and quality products.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Products</a>
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Jample Life. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
