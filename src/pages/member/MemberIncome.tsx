import MemberLayout from "@/components/layouts/MemberLayout";
import { IndianRupee, TrendingUp, ArrowUpRight, Calendar } from "lucide-react";

const incomeData = [
  { week: "Week 1 (Feb 2026)", binary: "₹5,000", level: "₹2,500", tds: "₹375", net: "₹7,125" },
  { week: "Week 4 (Jan 2026)", binary: "₹4,200", level: "₹1,800", tds: "₹300", net: "₹5,700" },
  { week: "Week 3 (Jan 2026)", binary: "₹3,500", level: "₹2,000", tds: "₹275", net: "₹5,225" },
  { week: "Week 2 (Jan 2026)", binary: "₹4,800", level: "₹1,500", tds: "₹315", net: "₹5,985" },
  { week: "Week 1 (Jan 2026)", binary: "₹3,000", level: "₹2,200", tds: "₹260", net: "₹4,940" },
];

const MemberIncome = () => {
  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="stat-card stat-card-primary">
            <IndianRupee className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹45,000</p>
            <p className="text-sm opacity-80">Total Income</p>
          </div>
          <div className="stat-card stat-card-secondary">
            <TrendingUp className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹30,000</p>
            <p className="text-sm opacity-80">Binary Income</p>
          </div>
          <div className="stat-card stat-card-accent">
            <ArrowUpRight className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹15,000</p>
            <p className="text-sm opacity-80">Level Income</p>
          </div>
          <div className="stat-card stat-card-danger">
            <Calendar className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹2,250</p>
            <p className="text-sm opacity-80">TDS Deducted (5%)</p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Weekly Income History
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Week</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">Binary</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">Level</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">TDS (5%)</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">Net Payout</th>
                  <th className="px-5 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {incomeData.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="px-5 py-3 text-sm font-medium text-foreground">{row.week}</td>
                    <td className="px-5 py-3 text-right text-sm text-foreground">{row.binary}</td>
                    <td className="px-5 py-3 text-right text-sm text-foreground">{row.level}</td>
                    <td className="px-5 py-3 text-right text-sm text-destructive">{row.tds}</td>
                    <td className="px-5 py-3 text-right text-sm font-semibold text-success">{row.net}</td>
                    <td className="px-5 py-3 text-center">
                      <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                        Paid
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberIncome;
