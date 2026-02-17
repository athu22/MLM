import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Search, ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-heading text-sm font-bold text-primary-foreground">
                JL
              </div>
              <span className="font-heading text-xl font-bold text-foreground">Jample Life</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors ${
                isActive("/products") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Products
            </Link>
            <a 
              href="#about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Show search and cart on products page */}
            {isActive("/products") && (
              <>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-64 rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button className="rounded-lg border border-border bg-muted p-2 hover:bg-muted/80">
                  <ShoppingCart className="h-4 w-4" />
                </button>
                <button className="rounded-lg border border-border bg-muted p-2 hover:bg-muted/80">
                  <Heart className="h-4 w-4" />
                </button>
              </>
            )}
            
            <button 
              onClick={() => {
                const element = document.createElement('div');
                element.innerHTML = `
                  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" id="login-modal">
                    <div class="w-full max-w-md rounded-xl bg-card p-6 shadow-lg">
                      <div class="mb-4 flex items-center justify-between">
                        <h3 class="font-heading text-xl font-bold text-foreground">Choose Login Type</h3>
                        <button class="rounded-lg p-2 hover:bg-muted transition-colors" onclick="document.getElementById('login-modal').remove()">
                          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="space-y-4">
                        <a href="/member/login" class="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
                          <svg class="mb-3 h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                          </svg>
                          <h4 class="mb-2 font-heading text-lg font-semibold text-foreground">Member Login</h4>
                          <p class="mb-4 text-sm text-muted-foreground">Access your dashboard, income & binary tree</p>
                          <span class="inline-flex items-center gap-1 text-sm font-medium text-primary">
                            Sign In <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                          </span>
                        </a>
                        <a href="/admin/login" class="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-md">
                          <svg class="mb-3 h-10 w-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                          <h4 class="mb-2 font-heading text-lg font-semibold text-foreground">Admin Panel</h4>
                          <p class="mb-4 text-sm text-muted-foreground">Manage users, income, EMI & reports</p>
                          <span class="inline-flex items-center gap-1 text-sm font-medium text-accent">
                            Admin Login <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                          </span>
                        </a>
                        <a href="/register" class="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-success hover:shadow-md">
                          <svg class="mb-3 h-10 w-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9a.75.75 0 01-.75.75V4.5"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9a.75.75 0 01-.75.75V4.5"></path>
                          </svg>
                          <h4 class="mb-2 font-heading text-lg font-semibold text-foreground">New Member</h4>
                          <p class="mb-4 text-sm text-muted-foreground">Register as new member</p>
                          <span class="inline-flex items-center gap-1 text-sm font-medium text-success">
                            Register Now <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                `;
                document.body.appendChild(element);
              }}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`text-sm font-medium transition-colors ${
                  isActive("/products") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <a 
                href="#about" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
