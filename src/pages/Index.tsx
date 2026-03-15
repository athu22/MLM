import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Users, Shield, ArrowRight, X, Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Youtube, Star, TrendingUp, 
  Award, Package, CheckCircle, Globe, Play, ChevronRight,
  Zap, BarChart
} from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "50K+", label: "Active Members" },
    { value: "₹15Cr+", label: "Total Payouts" },
    { value: "120+", label: "Premium Products" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Powerful Binary Matrix",
      description: "Our advanced algorithm ensures optimal placement and maximum team-building efficiency for unlimited earning potential.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Award,
      title: "Prestigious Ranks",
      description: "Climb the ladder of success from Executive to Diamond. Unlock exclusive bonuses, luxury tours, and fixed royalty incomes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Package,
      title: "World-Class Products",
      description: "Market-tested health, wellness, and lifestyle products that ensure high retention and continuous repurchases.",
      color: "from-orange-500 to-yellow-400"
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Experience lightning-fast daily and weekly withdrawals directly to your bank account with zero hidden charges.",
      color: "from-emerald-500 to-teal-400"
    }
  ];

  const products = [
    { 
      name: "Bio-Active Supplement", 
      price: "₹2,499", 
      category: "Health & Nutrition", 
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=600&auto=format&fit=crop",
      originalPrice: "₹3,999",
      rating: 4.9,
      reviews: 1240
    },
    { 
      name: "Premium Skincare Kit", 
      price: "₹4,199", 
      category: "Beauty & Wellness", 
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
      originalPrice: "₹5,499",
      rating: 4.8,
      reviews: 856
    },
    { 
      name: "Immunity Booster Pack", 
      price: "₹1,899", 
      category: "Health & Nutrition", 
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop",
      originalPrice: "₹2,499",
      rating: 4.7,
      reviews: 532
    },
    { 
      name: "Smart Fitness Watch", 
      price: "₹3,499", 
      category: "Lifestyle Tech", 
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format&fit=crop",
      originalPrice: "₹5,999",
      rating: 4.6,
      reviews: 945
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-600/10 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Hero Content */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">The Future of Direct Selling</span>
                </div>
                
                <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                  Build Your Empire With <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Jample Life</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
                  Join India's fastest-growing network marketing platform. Experience a revolutionary binary compensation plan designed to maximize your earning potential and secure your financial future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/member/login"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A0D14] font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Earning Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link 
                    to="/company/business-plan" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg rounded-full backdrop-blur-md transition-all"
                  >
                    <Play className="h-5 w-5 fill-current opacity-80" /> Watch Presentation
                  </Link>
                </div>
                
                <div className="mt-12 flex items-center gap-6 text-sm text-white/50 font-medium">
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> ISO Certified</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> 100% Legal & Safe</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Daily ROI</div>
                </div>
              </div>

              {/* Hero Image/Graphic */}
              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-[3rem] rotate-6 backdrop-blur-3xl border border-white/10"></div>
                  <div className="absolute inset-0 bg-[#131620] rounded-[3rem] -rotate-3 overflow-hidden border border-white/10 shadow-2xl flex flex-col">
                    {/* Mock Dashboard UI inside the graphic */}
                    <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-gradient-to-r from-white/5 to-transparent">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-white/40 text-xs font-medium mb-1">Total Income</p>
                          <h3 className="text-3xl font-bold font-heading text-emerald-400">₹2,45,800</h3>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-bold">+14.5%</div>
                      </div>
                      
                      {/* Fake Chart */}
                      <div className="h-32 mt-4 flex items-end gap-2 px-2">
                        {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-purple-500/50 to-pink-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-1">Direct Team</p>
                          <p className="text-xl font-bold text-white">124</p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-1">Left PV / Right PV</p>
                          <p className="text-xl font-bold text-white">45K / 42K</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -right-6 top-1/4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-2 rounded-full"><Award className="h-6 w-6 text-emerald-400" /></div>
                      <div>
                        <p className="text-xs text-white/60 font-medium">New Rank Achieved</p>
                        <p className="text-sm font-bold text-white">Diamond Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <h3 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-white mb-2">{stat.value}</h3>
                  <p className="text-sm font-medium text-white/50 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">Why Choose Us</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-6">Built For Your Success</h3>
              <p className="text-lg text-white/60 leading-relaxed">We provide a robust infrastructure, high-converting products, and a lucrative compensation plan that rewards your hard work immediately.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br \${feature.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}></div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br \${feature.color} p-[1px] mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-[#131620] rounded-[15px] flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-purple-300 transition-colors">{feature.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section id="products" className="py-24 bg-[#131620] relative border-y border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-widest text-pink-400 uppercase mb-3">Premium Shop</h2>
                <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4">Trending Products</h3>
                <p className="text-white/60 text-lg">High-quality lifestyle and health products designed for repeat purchases and massive retail profits.</p>
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 text-white font-semibold hover:text-pink-400 transition-colors shrink-0">
                Explore Full Catalog <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <div key={i} className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5 p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-white border border-white/10 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" /> {product.rating}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2">{product.category}</p>
                    <h4 className="text-lg font-bold text-white leading-tight mb-4">{product.name}</h4>
                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-black text-white">{product.price}</p>
                        <p className="text-sm text-white/40 line-through">{product.originalPrice}</p>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10">Start Your Success Journey Today</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto relative z-10">Take the first step towards financial freedom. Join our growing community of achievers and leaders.</p>
              
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link to="/register" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg flex items-center gap-2">
                  Create Free Account <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/company/compensation" className="px-8 py-4 bg-black/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-full hover:bg-black/30 transition-all text-lg">
                  View Business Plan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#05070A] border-t border-white/5 pt-20 pb-10 mt-auto">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
              
              <div className="lg:col-span-2">
                <Link to="/" className="flex items-center gap-3 mb-6">
                  <img src="/Logo.jpg" alt="Logo" className="h-12 w-12 rounded-xl border border-white/10" />
                  <span className="font-heading text-2xl font-black text-white tracking-tight">Jample Life</span>
                </Link>
                <p className="text-white/50 leading-relaxed max-w-sm mb-8">
                  Empowering individuals globally through state-of-the-art direct selling models, premium health products, and unmatched support systems.
                </p>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors border border-white/5">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
                <ul className="space-y-4">
                  <li><Link to="/company/about-us" className="text-white/50 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/company/vision" className="text-white/50 hover:text-white transition-colors">Our Vision</Link></li>
                  <li><Link to="/company/management" className="text-white/50 hover:text-white transition-colors">Management</Link></li>
                  <li><Link to="/company/legal" className="text-white/50 hover:text-white transition-colors">Legal Documents</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 tracking-wide">Opportunities</h4>
                <ul className="space-y-4">
                  <li><Link to="/opportunities/business-plan" className="text-white/50 hover:text-white transition-colors">Business Plan</Link></li>
                  <li><Link to="/opportunities/compensation" className="text-white/50 hover:text-white transition-colors">Compensation</Link></li>
                  <li><Link to="/opportunities/ranks-rewards" className="text-white/50 hover:text-white transition-colors">Ranks & Rewards</Link></li>
                  <li><Link to="/products" className="text-white/50 hover:text-white transition-colors">Product Catalog</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white/50"><MapPin className="h-5 w-5 shrink-0 text-white/30" /> <span>Cyber City, Andheri East, Mumbai, India 400093</span></li>
                  <li className="flex gap-3 text-white/50"><Phone className="h-5 w-5 shrink-0 text-white/30" /> <span>+91 1800-123-4567</span></li>
                  <li className="flex gap-3 text-white/50"><Mail className="h-5 w-5 shrink-0 text-white/30" /> <span>support@jamplelife.com</span></li>
                </ul>
              </div>

            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
              <p>© 2026 Jample Life. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>


    </div>
  );
};

export default Index;
