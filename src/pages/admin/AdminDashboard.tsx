import AdminLayout from "@/components/layouts/AdminLayout";
import {
  Users,
  IndianRupee,
  CreditCard,
  TrendingUp,
  UserCheck,
  UserX,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { label: "Total Users", value: "1,248", icon: Users, variant: "primary" as const, change: "+24 this week" },
  { label: "Active Users", value: "1,102", icon: UserCheck, variant: "secondary" as const, change: "88% active" },
  { label: "Total Income Paid", value: "₹24,50,000", icon: IndianRupee, variant: "accent" as const, change: "+₹3.2L this week" },
  { label: "EMI Pending", value: "146", icon: CreditCard, variant: "danger" as const, change: "12% overdue" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  secondary: "stat-card stat-card-secondary",
  accent: "stat-card stat-card-accent",
  danger: "stat-card stat-card-danger",
};

const recentUsers = [
  { id: "1045", name: "Suresh Patil", sponsor: "1001", date: "15 Feb 2026", status: "Active" },
  { id: "1044", name: "Anita Desai", sponsor: "1012", date: "14 Feb 2026", status: "Active" },
  { id: "1043", name: "Manoj Kumar", sponsor: "1005", date: "13 Feb 2026", status: "Pending KYC" },
  { id: "1042", name: "Rekha Joshi", sponsor: "1001", date: "12 Feb 2026", status: "Active" },
  { id: "1041", name: "Vijay Sinha", sponsor: "1018", date: "11 Feb 2026", status: "EMI Due" },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className={variantClasses[stat.variant]}>
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 opacity-80" />
                <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium">
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
              <p className="mt-3 text-2xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Users */}
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="border-b border-border p-5">
              <h3 className="font-heading text-base font-semibold text-foreground">Recent Joinings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase text-muted-foreground">ID</th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase text-muted-foreground">Name</th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase text-muted-foreground">Date</th>
                    <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((u) => (
                    <tr key={u.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-2.5 text-sm font-medium text-primary">{u.id}</td>
                      <td className="px-4 py-2.5 text-sm text-foreground">{u.name}</td>
                      <td className="px-4 py-2.5 text-sm text-muted-foreground">{u.date}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            u.status === "Active"
                              ? "bg-success/10 text-success"
                              : u.status === "EMI Due"
                              ? "bg-destructive/10 text-destructive"
                              : "bg-warning/10 text-warning"
                          }`}
                        >
                          {u.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
              Weekly Business Summary
            </h3>
            <div className="space-y-4">
              {[
                { label: "New Joinings", value: "24", bar: 60 },
                { label: "Binary Pairs", value: "156", bar: 78 },
                { label: "Total Payout", value: "₹3,20,000", bar: 45 },
                { label: "TDS Collected", value: "₹16,000", bar: 45 },
                { label: "EMI Collected", value: "₹1,46,000", bar: 82 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${item.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
