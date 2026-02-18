import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Lock, Eye, EyeOff, Users, ArrowRight, CheckCircle, Award, TrendingUp, Gift, Shield } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sponsorId: "1001",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    position: "left", // left or right
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/member/login");
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md mx-auto p-4">
          <div className="rounded-xl border border-border bg-card p-8 text-center shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            
            <h1 className="mb-4 font-heading text-2xl font-bold text-foreground">
              Registration Successful!
            </h1>
            
            <p className="mb-6 text-muted-foreground">
              Welcome to Jample Life! Your account has been created successfully.
            </p>
            
            <div className="rounded-lg bg-muted p-4 text-left">
              <h3 className="mb-3 font-semibold text-foreground">Registration Details:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium text-foreground">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium text-foreground">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member ID:</span>
                  <span className="font-medium text-primary">1007</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Position:</span>
                  <span className="font-medium text-foreground">{formData.position.toUpperCase()}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Redirecting to login page...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-white/5 backdrop-blur-md supports-[backdrop-filter]:bg-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/Logo.jpg" 
                alt="Jample Life Logo" 
                className="h-10 w-10 rounded-xl object-cover border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Jample Life
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/member/login" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Already have an account?
              </Link>
              <Link 
                to="/member/login" 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm border border-white/20"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] py-6">
        <div className="w-full px-6">
          <div className="flex justify-center">
            {/* Registration Form */}
            <div className="w-full max-w-3xl">
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm px-8 py-6 text-center border-b border-white/20">
                  <h1 className="font-heading text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    Create Your Account
                  </h1>
                  <p className="text-white/90 text-sm drop-shadow">
                    Join Jample Life and start your journey to success
                  </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="p-10 space-y-6">
                  {/* Sponsor ID */}
                  <div className="space-y-2">
                    <label htmlFor="sponsorId" className="block text-sm font-semibold text-white mb-2">
                      Sponsor ID
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                      <input
                        id="sponsorId"
                        type="text"
                        value={formData.sponsorId}
                        onChange={(e) => handleInputChange("sponsorId", e.target.value)}
                        className="w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
                        placeholder="Enter sponsor ID"
                        readOnly
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="bg-purple-500/20 text-purple-200 text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm border border-purple-400/30">
                          Auto-filled
                        </div>
                      </div>
                    </div>
                    {errors.sponsorId && (
                      <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                        <span>⚠️</span> {errors.sponsorId}
                      </p>
                    )}
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Full Name <span className="text-red-300">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={`w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 ${
                            errors.name ? 'border-red-400 focus:ring-red-400/50' : 'border-white/20'
                          }`}
                          placeholder="Enter your full name"
                          autoFocus
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                          <span>⚠️</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address <span className="text-red-300">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 ${
                            errors.email ? 'border-destructive focus:ring-destructive/50' : 'border-border'
                          }`}
                          placeholder="Enter your email"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                          <span>⚠️</span> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Position Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Phone Number <span className="text-red-300">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className={`w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 ${
                            errors.phone ? 'border-destructive focus:ring-destructive/50' : 'border-border'
                          }`}
                          placeholder="Enter 10-digit phone number"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                          <span>⚠️</span> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Position */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-white mb-2">
                        Position in Binary Tree <span className="text-red-300">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="relative group cursor-pointer">
                          <input
                            type="radio"
                            name="position"
                            value="left"
                            checked={formData.position === "left"}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            className="sr-only peer"
                          />
                          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-border bg-muted p-4 transition-all duration-200 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground hover:border-primary hover:bg-primary/10">
                            <Users className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium">Left</span>
                            <span className="text-xs text-muted-foreground">Position in tree</span>
                          </div>
                        </label>
                        
                        <label className="relative group cursor-pointer">
                          <input
                            type="radio"
                            name="position"
                            value="right"
                            checked={formData.position === "right"}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            className="sr-only peer"
                          />
                          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-border bg-muted p-4 transition-all duration-200 peer-checked:border-secondary peer-checked:bg-secondary peer-checked:text-secondary-foreground hover:border-secondary hover:bg-secondary/10">
                            <Users className="h-8 w-8 mb-2 text-muted-foreground group-hover:text-secondary transition-colors" />
                            <span className="text-sm font-medium">Right</span>
                            <span className="text-xs text-muted-foreground">Position in tree</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-semibold text-white mb-2">
                      Address <span className="text-red-300">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className={`w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 resize-none ${
                          errors.address ? 'border-red-400 focus:ring-red-400/50' : 'border-white/20'
                          }`}
                        placeholder="Enter your complete address"
                        rows={3}
                      />
                    </div>
                    {errors.address && (
                      <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                        <span>⚠️</span> {errors.address}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-white mb-2">
                        Password <span className="text-red-300">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className={`w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-12 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 ${
                            errors.password ? 'border-red-400 focus:ring-red-400/50' : 'border-white/20'
                          }`}
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                          <span>⚠️</span> {errors.password}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-2">
                        Confirm Password <span className="text-red-300">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className={`w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm pl-12 pr-12 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 ${
                            errors.confirmPassword ? 'border-destructive focus:ring-destructive/50' : 'border-border'
                          }`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-red-300 flex items-center gap-2">
                          <span>⚠️</span> {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/50"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                        I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-3.5 text-base font-semibold text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-3 backdrop-blur-sm border border-white/20"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary/30 border-t-primary"></div>
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          Create Account
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">About Us</Link>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</Link>
                <Link to="/products" className="text-sm text-white/80 hover:text-white transition-colors">Products</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <div className="space-y-2">
                <a href="tel:+911234567890" className="text-sm text-white/80 hover:text-white transition-colors">+91 12345 67890</a>
                <a href="mailto:support@jamplelife.com" className="text-sm text-white/80 hover:text-white transition-colors">support@jamplelife.com</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors backdrop-blur-sm border border-white/20">
                  <span className="text-xs">f</span>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors backdrop-blur-sm border border-white/20">
                  <span className="text-xs">t</span>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors backdrop-blur-sm border border-white/20">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors backdrop-blur-sm border border-white/20">
                  <span className="text-xs">ig</span>
                </a>
              </div>
            </div>
            
            <div className="text-center md:col-span-3">
              <p className="text-sm text-white/60">
                &copy; {new Date().getFullYear()} Jample Life. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
