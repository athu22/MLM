import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, Heart, ArrowRight, ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path?: string;
  subItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { 
    label: "Company", 
    subItems: [
      { label: "About Us", path: "/company/about-us" },
      { label: "Our Vision", path: "/company/vision" },
      { label: "Management", path: "/company/management" },
      { label: "Legal Documents", path: "/company/legal" }
    ]
  },
  { 
    label: "Opportunities", 
    subItems: [
      { label: "Business Plan", path: "/opportunities/business-plan" },
      { label: "Compensation", path: "/opportunities/compensation" },
      { label: "Ranks & Rewards", path: "/opportunities/ranks-rewards" },
    ]
  },
  { label: "Contact", path: "#contact" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F111A]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#0F111A]/80 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group">
                <img 
                  src="/Logo.jpg" 
                  alt="Jample Life Logo" 
                  className="h-12 w-12 rounded-xl object-cover border-2 border-primary/30 group-hover:border-primary transition-colors shadow-lg shadow-primary/20"
                />
                <span className="font-heading text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:to-primary/80 transition-all">
                  Jample Life
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-2 ${
                        activeDropdown === item.label ? "text-primary" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-primary" : "group-hover:text-white"}`} />
                    </button>
                  ) : (
                    <Link 
                      to={item.path!} 
                      className={`text-sm font-semibold tracking-wide transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100 ${
                        isActive(item.path) ? "text-white after:scale-x-100 after:origin-bottom-left" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.subItems && activeDropdown === item.label && (
                    <div className="absolute top-full -left-4 mt-4 w-56 rounded-xl border border-white/10 bg-[#1A1F2C]/95 backdrop-blur-xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all hover:pl-5"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {isActive("/products") && (
                <div className="hidden md:flex items-center gap-3">
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50 group-hover:text-primary transition-colors" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-48 lg:w-64 rounded-full border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all focus:bg-white/10"
                    />
                  </div>
                  <button className="relative rounded-full border border-white/10 bg-white/5 p-2.5 hover:bg-white/10 hover:border-white/20 transition-all">
                    <ShoppingCart className="h-4 w-4 text-white/80" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">0</span>
                  </button>
                </div>
              )}
              
              <Link 
                to="/member/login"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 text-sm font-bold tracking-wide text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 border border-white/10 hover:-translate-y-0.5 hidden sm:block"
              >
                Login
              </Link>
            
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>


      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] bg-[#1A1F2C] border-l border-white/10 p-6 transition-transform duration-300 transform shadow-2xl overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <span className="font-heading text-xl font-bold text-white">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <X className="h-5 w-5 text-white/80" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/5 pb-2 mb-2">
                {item.subItems ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-bold text-white/40 uppercase tracking-wider">{item.label}</div>
                    <div className="flex flex-col gap-1 pl-3 border-l-2 border-white/5 ml-3">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="px-3 py-2 text-sm font-medium text-white/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path!} 
                    className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive(item.path) ? "bg-primary/20 text-primary font-semibold" : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              to="/member/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 block w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3.5 text-base font-bold text-white shadow-lg text-center"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
