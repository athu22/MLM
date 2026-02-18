import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Wallet,
  IndianRupee,
  CreditCard,
  Award,
  UserCircle,
  HelpCircle,
  LogOut,
  GitBranch,
} from "lucide-react";

interface MemberLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/member/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/member/binary-tree", label: "Binary Tree", icon: GitBranch },
  { path: "/member/income", label: "Income", icon: IndianRupee },
  { path: "/member/emi", label: "EMI", icon: CreditCard },
  { path: "/member/wallet", label: "Wallet", icon: Wallet },
  { path: "/member/team", label: "My Team", icon: Users },
  { path: "/member/rank", label: "Rank / Stockist", icon: Award },
  { path: "/member/profile", label: "Profile", icon: UserCircle },
  { path: "/member/support", label: "Support", icon: HelpCircle },
];

const MemberLayout = ({ children }: MemberLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="sidebar-nav fixed left-0 top-0 z-30 flex h-full w-64 flex-col">
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <img 
            src="/Logo.jpg" 
            alt="Jample Life Logo" 
            className="h-9 w-9 rounded-lg object-cover border border-white/20"
          />
          <span className="font-heading text-lg font-bold text-white">
            Jample Life
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <item.icon className="h-4.5 w-4.5" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <LogOut className="h-4.5 w-4.5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            {navItems.find((n) => n.path === location.pathname)?.label || "Dashboard"}
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                RS
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Rahul Sharma</p>
                <p className="text-xs text-muted-foreground">ID: 1001</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default MemberLayout;
