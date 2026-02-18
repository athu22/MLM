import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Search, ShoppingCart, Heart, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md supports-[backdrop-filter]:bg-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/Logo.jpg" 
                  alt="Jample Life Logo" 
                  className="h-10 w-10 rounded-xl object-cover border border-white/20"
                />
                <span className="font-heading text-xl font-bold text-white">Jample Life</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  isActive("/") ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`text-sm font-medium transition-colors ${
                  isActive("/products") ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                Products
              </Link>
              <a 
                href="#about" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              {/* Show search and cart on products page */}
              {isActive("/products") && (
                <>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/80" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-64 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-10 pr-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                    />
                  </div>
                  <button className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20">
                    <ShoppingCart className="h-4 w-4 text-white/80" />
                  </button>
                  <button className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20">
                    <Heart className="h-4 w-4 text-white/80" />
                  </button>
                </>
              )}
              
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20"
              >
                Get Started
              </button>
            
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setIsLoginModalOpen(false)}>
          <div className="w-full max-w-4xl rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-heading text-2xl font-bold text-white">Choose Login Type</h3>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="rounded-lg p-2 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                to="/member/login"
                onClick={() => setIsLoginModalOpen(false)}
                className="group block rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-sm transition-all hover:border-purple-500 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                  <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-white">Member Login</h4>
                <p className="mb-4 text-sm text-white/80">Access your dashboard, income & binary tree</p>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-purple-400">
                  Sign In <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              
              <Link 
                to="/admin/login"
                onClick={() => setIsLoginModalOpen(false)}
                className="group block rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-sm transition-all hover:border-pink-500 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20">
                  <svg className="h-8 w-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-white">Admin Panel</h4>
                <p className="mb-4 text-sm text-white/80">Manage users, income, EMI & reports</p>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-pink-400">
                  Admin Login <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              
              <Link 
                to="/register"
                onClick={() => setIsLoginModalOpen(false)}
                className="group block rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-sm transition-all hover:border-green-500 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9a.75.75 0 01-.75.75V4.5"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9a.75.75 0 01-.75.75V4.5"></path>
                  </svg>
                </div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-white">New Member</h4>
                <p className="mb-4 text-sm text-white/80">Register as new member</p>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-green-400">
                  Register Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/5 backdrop-blur-md py-4">
          <nav className="flex flex-col gap-3">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-white" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors ${
                isActive("/products") ? "text-white" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <a 
              href="#about" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
