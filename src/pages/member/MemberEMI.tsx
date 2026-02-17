import MemberLayout from "@/components/layouts/MemberLayout";
import { CreditCard, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const emiData = [
  { month: 1, amount: "₹1,000", dueDate: "15 Sep 2025", status: "paid" },
  { month: 2, amount: "₹1,000", dueDate: "15 Oct 2025", status: "paid" },
  { month: 3, amount: "₹1,000", dueDate: "15 Nov 2025", status: "paid" },
  { month: 4, amount: "₹1,000", dueDate: "15 Dec 2025", status: "upcoming" },
  { month: 5, amount: "₹1,000", dueDate: "15 Jan 2026", status: "upcoming" },
  { month: 6, amount: "₹1,000", dueDate: "15 Feb 2026", status: "upcoming" },
];

const MemberEMI = () => {
  const paidCount = emiData.filter((e) => e.status === "paid").length;
  const pendingCount = emiData.filter((e) => e.status === "upcoming").length;

  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="stat-card stat-card-primary">
            <CreditCard className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹6,000</p>
            <p className="text-sm opacity-80">Total EMI Amount</p>
          </div>
          <div className="stat-card stat-card-secondary">
            <CheckCircle className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹{paidCount * 1000}</p>
            <p className="text-sm opacity-80">{paidCount} EMIs Paid</p>
          </div>
          <div className="stat-card stat-card-danger">
            <Clock className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹{pendingCount * 1000}</p>
            <p className="text-sm opacity-80">{pendingCount} EMIs Remaining</p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <h3 className="font-heading text-base font-semibold text-foreground">
              EMI Schedule (₹1,000 × 6 months, 0% Interest)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">EMI #</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Amount</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Due Date</th>
                  <th className="px-5 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {emiData.map((emi) => (
                  <tr key={emi.month} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="px-5 py-3 text-sm font-medium text-foreground">EMI {emi.month}</td>
                    <td className="px-5 py-3 text-sm text-foreground">{emi.amount}</td>
                    <td className="px-5 py-3 text-sm text-foreground">{emi.dueDate}</td>
                    <td className="px-5 py-3 text-center">
                      {emi.status === "paid" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                          <CheckCircle className="h-3 w-3" /> Paid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-warning/10 px-2 py-0.5 text-xs font-medium text-warning">
                          <AlertTriangle className="h-3 w-3" /> Upcoming
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {emi.status === "upcoming" && (
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Pay Now
                        </Button>
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

export default MemberEMI;
