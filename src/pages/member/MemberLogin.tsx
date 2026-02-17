import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const MemberLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - navigate to dashboard
    navigate("/member/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Login Form */}
      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-1 font-heading text-2xl font-bold text-foreground">
              JAMPLE LIFE
            </h1>
            <h2 className="mb-2 font-heading text-xl font-semibold text-foreground">
              Welcome Back!
            </h2>
            <p className="text-sm text-muted-foreground">
              Sign in to continue to Jample Life
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(c) => setRememberMe(c as boolean)}
                />
                <label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Log In
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Sign Up now
              </a>
            </p>
          </form>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            © 2026 Jample Life
          </p>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="login-illustration hidden items-center justify-center lg:flex lg:w-1/2">
        <div className="max-w-lg px-12 text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-20 w-20 rotate-45 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          <blockquote className="mb-4 text-lg font-medium italic text-white/90">
            "Building a better future together through network marketing and quality products."
          </blockquote>
          <p className="font-heading text-base font-semibold text-white">
            Jample Life Team
          </p>
          <p className="text-sm text-white/70">Network Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default MemberLogin;
