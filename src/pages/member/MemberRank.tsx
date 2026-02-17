import MemberLayout from "@/components/layouts/MemberLayout";
import { Award, Star } from "lucide-react";

const ranks = [
  { rank: "Stockist", stock: "10 Products", salary: "₹3,000", sponsorSalary: "₹3,000", current: false, achieved: true },
  { rank: "Post Stockist", stock: "20 Products", salary: "₹6,000", sponsorSalary: "₹6,000", current: true, achieved: true },
  { rank: "City Stockist", stock: "40 Products", salary: "₹12,000", sponsorSalary: "₹12,000", current: false, achieved: false },
  { rank: "District Stockist", stock: "100 Products", salary: "₹30,000", sponsorSalary: "₹30,000", current: false, achieved: false },
  { rank: "State Stockist", stock: "500 Products", salary: "₹1,50,000", sponsorSalary: "₹1,50,000", current: false, achieved: false },
];

const MemberRank = () => {
  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Rank & Stockist Levels
            </h3>
            <p className="text-sm text-muted-foreground">
              Salary Duration: 40 months | Sponsor Salary: 10 months
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Rank</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Stock Required</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">Monthly Salary</th>
                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">Sponsor Salary</th>
                  <th className="px-5 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {ranks.map((r) => (
                  <tr
                    key={r.rank}
                    className={`border-b border-border last:border-0 ${
                      r.current ? "bg-primary/5" : "hover:bg-muted/30"
                    }`}
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Award className={`h-4 w-4 ${r.current ? "text-accent" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-medium ${r.current ? "text-primary" : "text-foreground"}`}>
                          {r.rank}
                        </span>
                        {r.current && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
                            Current
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-foreground">{r.stock}</td>
                    <td className="px-5 py-3 text-right text-sm font-semibold text-foreground">{r.salary}</td>
                    <td className="px-5 py-3 text-right text-sm font-semibold text-foreground">{r.sponsorSalary}</td>
                    <td className="px-5 py-3 text-center">
                      {r.achieved ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
                          <Star className="h-3 w-3 fill-current" /> Achieved
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Locked</span>
                      )}
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

export default MemberRank;
