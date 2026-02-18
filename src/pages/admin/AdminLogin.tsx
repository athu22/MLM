import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(220 50% 25%), hsl(250 40% 20%))" }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl overflow-hidden border border-white/20">
            <img 
              src="/Logo.jpg" 
              alt="Jample Life Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-heading text-2xl font-bold text-white">Welcome Admin</h1>
          <p className="text-sm text-white/60">Sign in with credentials</p>
        </div>

        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, hsl(250 40% 30% / 0.8), hsl(220 45% 20% / 0.8))", backdropFilter: "blur(20px)", border: "1px solid hsl(0 0% 100% / 0.1)" }}>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-primary"
              />
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-white/20 bg-white/10 pr-10 text-white placeholder:text-white/50 focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                Login
              </Button>
              <Button type="reset" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Reset
              </Button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center text-sm text-white/40">
          <a href="#" className="hover:text-white/60">Forgot password?</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
