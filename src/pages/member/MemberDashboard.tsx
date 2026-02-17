import {
  Wallet,
  IndianRupee,
  CreditCard,
  Users,
  TrendingUp,
  ArrowUpRight,
  Award,
  GitBranch,
} from "lucide-react";
import MemberLayout from "@/components/layouts/MemberLayout";

const stats = [
  { label: "Wallet Balance", value: "₹12,500", icon: Wallet, variant: "primary" as const, change: "+₹2,500" },
  { label: "Total Income", value: "₹45,000", icon: IndianRupee, variant: "secondary" as const, change: "+₹5,000" },
  { label: "Binary Income", value: "₹30,000", icon: GitBranch, variant: "accent" as const, change: "+₹3,500" },
  { label: "EMI Remaining", value: "₹3,000", icon: CreditCard, variant: "danger" as const, change: "3 EMIs left" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  secondary: "stat-card stat-card-secondary",
  accent: "stat-card stat-card-accent",
  danger: "stat-card stat-card-danger",
};

const recentPayouts = [
  { date: "12 Feb 2026", amount: "₹5,000", type: "Binary Income", status: "Paid" },
  { date: "05 Feb 2026", amount: "₹3,500", type: "Binary Income", status: "Paid" },
  { date: "29 Jan 2026", amount: "₹4,200", type: "Level Income", status: "Paid" },
  { date: "22 Jan 2026", amount: "₹2,800", type: "Binary Income", status: "Paid" },
];

const MemberDashboard = () => {
  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        {/* Stats */}
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Team Summary */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Users className="h-5 w-5 text-primary" />
              Team Summary
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Left Team</span>
                <span className="font-semibold text-foreground">24</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Right Team</span>
                <span className="font-semibold text-foreground">18</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Active Members</span>
                <span className="font-semibold text-success">38</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Inactive Members</span>
                <span className="font-semibold text-destructive">4</span>
              </div>
            </div>
          </div>

          {/* Rank Info */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Award className="h-5 w-5 text-accent" />
              Current Rank
            </h3>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">Post Stockist</p>
                <p className="text-sm text-muted-foreground">20 Products Stock</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Salary</span>
                <span className="font-semibold text-foreground">₹6,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sponsor Salary</span>
                <span className="font-semibold text-foreground">₹6,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Salary Duration</span>
                <span className="font-semibold text-foreground">40 months</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-1 text-xs text-muted-foreground">Next Rank: City Stockist (40 Products)</p>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-accent" style={{ width: "50%" }} />
              </div>
            </div>
          </div>

          {/* Recent Payouts */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Recent Payouts
            </h3>
            <div className="space-y-3">
              {recentPayouts.map((payout, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{payout.type}</p>
                    <p className="text-xs text-muted-foreground">{payout.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-success">{payout.amount}</p>
                    <span className="text-xs text-success">{payout.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberDashboard;
