import { IndianRupee, TrendingUp, Users, Calendar, Filter, Download, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const incomeStats = [
  { label: "Total Income Distributed", value: "₹15,45,000", icon: IndianRupee, variant: "primary" as const, change: "+₹45,000" },
  { label: "This Month Payout", value: "₹2,85,000", icon: TrendingUp, variant: "success" as const, change: "+₹35,000" },
  { label: "Pending Payouts", value: "₹45,500", icon: Clock, variant: "warning" as const, change: "12 members" },
  { label: "Active Earners", value: "156", icon: Users, variant: "accent" as const, change: "+8 this month" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  success: "stat-card stat-card-success",
  warning: "stat-card stat-card-warning",
  accent: "stat-card stat-card-accent",
};

const incomeTransactions = [
  {
    id: "TXN001",
    memberId: "1001",
    memberName: "Rahul Sharma",
    type: "Binary Income",
    amount: "₹5,000",
    date: "15 Feb 2026",
    status: "paid",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "TXN002",
    memberId: "1002", 
    memberName: "Priya Patel",
    type: "Level Income",
    amount: "₹3,500",
    date: "15 Feb 2026",
    status: "paid",
    paymentMethod: "Wallet"
  },
  {
    id: "TXN003",
    memberId: "1003",
    memberName: "Amit Kumar", 
    type: "Binary Income",
    amount: "₹4,200",
    date: "14 Feb 2026",
    status: "pending",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "TXN004",
    memberId: "1004",
    memberName: "Sneha Reddy",
    type: "Rank Bonus",
    amount: "₹2,800",
    date: "14 Feb 2026",
    status: "processing",
    paymentMethod: "Wallet"
  }
];

const incomeTypes = [
  { name: "Binary Income", total: "₹8,45,000", percentage: 45, color: "bg-blue-500" },
  { name: "Level Income", total: "₹5,20,000", percentage: 28, color: "bg-green-500" },
  { name: "Rank Bonus", total: "₹2,80,000", percentage: 15, color: "bg-yellow-500" },
  { name: "Referral Bonus", total: "₹1,00,000", percentage: 7, color: "bg-purple-500" },
  { name: "Other", total: "₹1,00,000", percentage: 5, color: "bg-gray-500" }
];

const AdminIncome = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-success/10 text-success';
      case 'pending': return 'bg-warning/10 text-warning';
      case 'processing': return 'bg-primary/10 text-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        {/* Income Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {incomeStats.map((stat) => (
            <div key={stat.label} className={variantClasses[stat.variant]}>
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 opacity-80" />
                <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </span>
              </div>
              <p className="mt-3 text-2xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Income Distribution Chart */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <IndianRupee className="h-5 w-5 text-primary" />
              Income Distribution
            </h3>
            <div className="space-y-3">
              {incomeTypes.map((type) => (
                <div key={type.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{type.name}</span>
                    <span className="text-muted-foreground">{type.total}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className={`h-full ${type.color} transition-all duration-300`}
                      style={{ width: `${type.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 text-success" />
              Monthly Payout Trend
            </h3>
            <div className="space-y-3">
              {[
                { month: "Feb 2026", amount: "₹2,85,000", status: "completed" },
                { month: "Jan 2026", amount: "₹2,50,000", status: "completed" },
                { month: "Dec 2025", amount: "₹2,75,000", status: "completed" },
                { month: "Nov 2025", amount: "₹2,20,000", status: "completed" },
                { month: "Oct 2025", amount: "₹2,10,000", status: "completed" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{item.month}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{item.amount}</span>
                    <CheckCircle className="h-4 w-4 text-success" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Income Transactions */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <IndianRupee className="h-5 w-5 text-primary" />
              Income Transactions
            </h3>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                <Filter className="mr-2 h-4 w-4 inline" />
                Filter
              </button>
              <button className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                <Download className="mr-2 h-4 w-4 inline" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Transaction ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Member</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Payment Method</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {incomeTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{transaction.id}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{transaction.memberName}</p>
                        <p className="text-xs text-muted-foreground">ID: {transaction.memberId}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{transaction.type}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">{transaction.amount}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{transaction.date}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{transaction.paymentMethod}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status === 'paid' && <CheckCircle className="mr-1 h-3 w-3" />}
                        {transaction.status === 'pending' && <Clock className="mr-1 h-3 w-3" />}
                        {transaction.status === 'processing' && <AlertCircle className="mr-1 h-3 w-3" />}
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-primary hover:underline">
                        <Eye className="mr-1 h-3 w-3 inline" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Process Payouts</p>
                <p className="text-sm text-muted-foreground">12 pending</p>
              </div>
            </div>
          </button>
          
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Download className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Generate Report</p>
                <p className="text-sm text-muted-foreground">Monthly summary</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Filter className="h-5 w-5 text-warning" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Audit Transactions</p>
                <p className="text-sm text-muted-foreground">Review logs</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <IndianRupee className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Tax Reports</p>
                <p className="text-sm text-muted-foreground">Generate TDS</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminIncome;
