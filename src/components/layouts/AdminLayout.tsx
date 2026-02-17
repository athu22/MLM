import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  IndianRupee,
  CreditCard,
  Award,
  Package,
  BarChart3,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/users", label: "User Management", icon: Users },
  { path: "/admin/income", label: "Income Control", icon: IndianRupee },
  { path: "/admin/emi", label: "EMI Manager", icon: CreditCard },
  { path: "/admin/ranks", label: "Rank & Salary", icon: Award },
  { path: "/admin/products", label: "Products", icon: Package },
  { path: "/admin/reports", label: "Reports", icon: BarChart3 },
  { path: "/admin/settings", label: "Settings", icon: Settings },
];

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="sidebar-nav fixed left-0 top-0 z-30 flex h-full w-64 flex-col">
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-heading text-sm font-bold text-accent-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-heading text-lg font-bold text-white">
            Admin Panel
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
                        ? "bg-accent text-accent-foreground shadow-md"
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

      <main className="ml-64 flex-1">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            {navItems.find((n) => n.path === location.pathname)?.label || "Dashboard"}
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              A
            </div>
            <span className="text-sm font-medium text-foreground">Admin</span>
          </div>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
