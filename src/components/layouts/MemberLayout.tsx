import { ReactNode, useState } from "react";
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
  ChevronDown,
  Menu,
  X,
  FileText,
  Settings,
  ListTodo,
  Link as LinkIcon
} from "lucide-react";

interface MemberLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/member/dashboard", label: "Dashboard", icon: LayoutDashboard },
  {
    label: "Profile", icon: UserCircle,
    subItems: [
      { path: "/member/profile", label: "View Profile" },
      { path: "/member/profile/edit", label: "Edit Profile" },
      { path: "/member/profile/password", label: "Change Password" },
    ]
  },
  {
    label: "Wallet", icon: Wallet,
    subItems: [
      { path: "/member/wallet", label: "My Wallet" },
      { path: "/member/wallet/recharge", label: "Recharge" },
      { path: "/member/wallet/withdraw", label: "Withdraw" },
      { path: "/member/wallet/history", label: "Transaction History" },
    ]
  },
  {
    label: "Income", icon: IndianRupee,
    subItems: [
      { path: "/member/income", label: "Income Summary" },
      { path: "/member/income/daily", label: "Daily Income" },
      { path: "/member/income/referral", label: "Referral Income" },
      { path: "/member/income/level", label: "Level Income" },
      { path: "/member/income/bonus", label: "Bonus Income" },
    ]
  },
  {
    label: "Tasks", icon: ListTodo,
    subItems: [
      { path: "/member/tasks/daily", label: "Daily Tasks" },
      { path: "/member/tasks/history", label: "Task History" },
    ]
  },
  {
    label: "My Team", icon: Users,
    subItems: [
      { path: "/member/team", label: "Team Overview" },
      { path: "/member/team/direct", label: "Direct Team" },
      { path: "/member/team/level", label: "Level Team" },
    ]
  },
  { path: "/member/binary-tree", label: "User Tree", icon: GitBranch },
  { path: "/member/referral-link", label: "Referral Link", icon: LinkIcon },
  { path: "/member/emi", label: "EMI", icon: CreditCard },
  { path: "/member/rank", label: "Rank / Stockist", icon: Award },
  { path: "/member/reports", label: "Reports", icon: FileText },
  { path: "/member/support", label: "Support / Tickets", icon: HelpCircle },
  { path: "/member/settings", label: "Settings", icon: Settings },
];

const MemberLayout = ({ children }: MemberLayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar-nav fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-sidebar transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-16 items-center justify-between gap-3 border-b border-sidebar-border px-6">
          <div className="flex items-center gap-3">
            <img 
              src="/Logo.jpg" 
              alt="Jample Life Logo" 
              className="h-9 w-9 rounded-lg object-cover border border-white/20"
            />
            <span className="font-heading text-lg font-bold text-white">
              Jample Life
            </span>
          </div>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const hasSubItems = !!item.subItems;
              const isActive = item.path ? location.pathname === item.path : item.subItems?.some(sub => location.pathname === sub.path);
              const isSubmenuOpen = openSubmenu === item.label || isActive;

              return (
                <li key={item.label}>
                  {hasSubItems ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isActive || isSubmenuOpen
                            ? "bg-primary/10 text-primary"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-4.5 w-4.5" />
                          {item.label}
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isSubmenuOpen && (
                        <ul className="mt-1 ml-9 space-y-1 border-l border-sidebar-border/50 pl-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                                  location.pathname === subItem.path
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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

        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut className="h-4.5 w-4.5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-border bg-card/80 backdrop-blur-md px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 -ml-2 text-foreground hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h2 className="font-heading text-lg font-semibold text-foreground hidden sm:block">
              User Panel
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-accent/50 p-1.5 rounded-lg transition-colors">
              <div className="flex h-9 w-9 shadow-sm items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                RS
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-foreground leading-tight">Rahul Sharma</p>
                <p className="text-xs text-muted-foreground leading-tight">ID: JL1001</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 flex-1 w-full max-w-[100vw] lg:max-w-none overflow-x-hidden">
          <div className="mx-auto w-full max-w-7xl overflow-x-hidden">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemberLayout;
