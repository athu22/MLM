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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 font-heading text-2xl font-bold text-white">
              JL
            </div>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-6xl">
              Welcome to Jample Life
            </h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
              Transform your life with our advanced binary MLM system. Join thousands of successful entrepreneurs building their dreams with quality products and unlimited earning potential.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <a 
                href="#get-started"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
              >
                Get Started Now <ArrowRight className="h-5 w-5" />
              </a>
              <Link 
                to="/products" 
                className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium text-white hover:bg-white/20 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Why Choose Jample Life?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We provide the best platform for your network marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Our Premium Products
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              High-quality health, wellness and beauty products
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div key={index} className="group rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                {/* Product Image */}
                <div className="relative aspect-square bg-white/5 overflow-hidden">
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
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white text-center">{product.name}</h3>
                  <p className="mb-3 text-sm text-white/80 text-center">{product.category}</p>
                  
                  {/* Pricing */}
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{product.price}</p>
                    <p className="text-sm text-white/60 line-through">{product.originalPrice}</p>
                  </div>
                  
                  {/* View Products Button */}
                  <div className="mt-4 text-center">
                    <Link 
                      to="/products"
                      className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
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
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Success Stories
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Hear from our successful members
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/80">{testimonial.rank}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-white/80 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Get In Touch
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to start your journey? Contact us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Phone</h3>
              <p className="text-sm text-white/80">+91 1800-123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Email</h3>
              <p className="text-sm text-white/80">support@jamplelife.com</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Office</h3>
              <p className="text-sm text-white/80">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 font-heading text-sm font-bold text-white">
                  JL
                </div>
                <span className="font-heading text-xl font-bold text-white">Jample Life</span>
              </div>
              <p className="text-sm text-white/80">
                Transform your life with network marketing and quality products.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-sm text-white/80 hover:text-white transition-colors">Home</a>
                <a href="/products" className="block text-sm text-white/80 hover:text-white transition-colors">Products</a>
                <a href="#about" className="block text-sm text-white/80 hover:text-white transition-colors">About</a>
                <a href="#contact" className="block text-sm text-white/80 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-white">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/20">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/20">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/20">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/20">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/60">
              © 2026 Jample Life. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;
