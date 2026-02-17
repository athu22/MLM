import MemberLayout from "@/components/layouts/MemberLayout";
import { Wallet, ArrowDownLeft, ArrowUpRight, IndianRupee } from "lucide-react";

const transactions = [
  { id: 1, type: "credit", desc: "Binary Income - Week 1", amount: "₹5,000", date: "12 Feb 2026" },
  { id: 2, type: "debit", desc: "Withdrawal to Bank", amount: "₹3,000", date: "10 Feb 2026" },
  { id: 3, type: "credit", desc: "Level Income - Week 4", amount: "₹2,500", date: "05 Feb 2026" },
  { id: 4, type: "credit", desc: "Binary Income - Week 4", amount: "₹4,200", date: "05 Feb 2026" },
  { id: 5, type: "debit", desc: "EMI Payment #4", amount: "₹1,000", date: "01 Feb 2026" },
  { id: 6, type: "credit", desc: "Sponsor Salary", amount: "₹6,000", date: "28 Jan 2026" },
];

const MemberWallet = () => {
  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="stat-card stat-card-primary">
            <Wallet className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹12,500</p>
            <p className="text-sm opacity-80">Available Balance</p>
          </div>
          <div className="stat-card stat-card-secondary">
            <ArrowDownLeft className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹45,000</p>
            <p className="text-sm opacity-80">Total Credits</p>
          </div>
          <div className="stat-card stat-card-accent">
            <ArrowUpRight className="h-7 w-7 opacity-80" />
            <p className="mt-2 text-2xl font-bold">₹32,500</p>
            <p className="text-sm opacity-80">Total Debits</p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Transaction History
            </h3>
          </div>
          <div className="divide-y divide-border">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between px-5 py-4 hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      tx.type === "credit" ? "bg-success/10" : "bg-destructive/10"
                    }`}
                  >
                    {tx.type === "credit" ? (
                      <ArrowDownLeft className="h-5 w-5 text-success" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{tx.desc}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <p
                  className={`text-sm font-semibold ${
                    tx.type === "credit" ? "text-success" : "text-destructive"
                  }`}
                >
                  {tx.type === "credit" ? "+" : "-"}{tx.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberWallet;
