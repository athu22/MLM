import { ReactNode, useState } from "react";
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
  Wallet,
  Calendar,
  ListTodo,
  FileText,
  Volume2,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  {
    label: "User Management", icon: Users, subItems: [
      { path: "/admin/users", label: "All Users" },
      { path: "/admin/users/add", label: "Add New User" },
      { path: "/admin/users/edit", label: "User Search / Edit" },
    ]
  },
  {
    label: "Wallet Management", icon: Wallet, subItems: [
      { path: "/admin/wallet/recharge", label: "Recharge Requests" },
      { path: "/admin/wallet/withdraw", label: "Withdraw Requests" },
      { path: "/admin/wallet/history", label: "Transaction History" },
    ]
  },
  {
    label: "Income & Commission", icon: IndianRupee, subItems: [
      { path: "/admin/income", label: "Income Settings" },
      { path: "/admin/plans", label: "Plan Management" },
    ]
  },
  { path: "/admin/emi", label: "EMI Manager", icon: CreditCard },
  { path: "/admin/tasks", label: "Task Management", icon: ListTodo },
  { path: "/admin/ranks", label: "Rank & Salary", icon: Award },
  { path: "/admin/products", label: "Products", icon: Package },
  { path: "/admin/reports", label: "Reports", icon: BarChart3 },
  { path: "/admin/notices", label: "Notices & Announcements", icon: Volume2 },
  { path: "/admin/settings", label: "Website Settings", icon: Settings },
];

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar-nav fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-[#1A1F2C] border-r border-border shadow-xl lg:shadow-none transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 font-heading text-sm font-bold">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-heading text-lg font-bold text-white tracking-wide">
              ADMIN PANEL
            </span>
          </div>
          <button className="lg:hidden text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const hasSubItems = !!item.subItems;
              const isActive = item.path ? location.pathname === item.path : item.subItems?.some(p => location.pathname === p.path);
              const isSubmenuOpen = openSubmenu === item.label || isActive;

              return (
                <li key={item.label}>
                  {hasSubItems ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive || isSubmenuOpen
                            ? "bg-white/5 text-orange-400"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-4.5 w-4.5" />
                          {item.label}
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isSubmenuOpen && (
                        <ul className="mt-1 ml-9 space-y-1 border-l border-white/10 pl-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                                  location.pathname === subItem.path
                                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <item.icon className="h-4.5 w-4.5" />
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-3 bg-[#11141C]">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-4.5 w-4.5" />
            Sign Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-border bg-card/80 backdrop-blur-md px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 -ml-2 text-foreground hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h2 className="font-heading text-lg font-semibold text-foreground hidden sm:block">
              {navItems.find((n) => n.path === location.pathname)?.label || "Administration"}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer hover:bg-accent/50 p-1.5 rounded-lg transition-colors">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-sm ring-2 ring-background">
              AD
            </div>
            <span className="text-sm font-semibold text-foreground hidden sm:block">Admin Super</span>
          </div>
        </header>

        <div className="p-4 sm:p-6 flex-1 w-full max-w-[100vw] lg:max-w-none overflow-x-hidden bg-muted/20">
          <div className="mx-auto w-full max-w-7xl overflow-x-hidden">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
