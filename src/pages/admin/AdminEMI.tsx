import { CreditCard, Calendar, Users, TrendingUp, AlertCircle, CheckCircle, Clock, Plus, Edit, Trash2, Download } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const emiStats = [
  { label: "Total Active EMIs", value: "245", icon: CreditCard, variant: "primary" as const, change: "+12 this month" },
  { label: "Monthly EMI Collection", value: "₹8,45,000", icon: TrendingUp, variant: "success" as const, change: "+₹45,000" },
  { label: "Overdue EMIs", value: "18", icon: AlertCircle, variant: "danger" as const, change: "₹45,000 pending" },
  { label: "EMI Success Rate", value: "92.5%", icon: CheckCircle, variant: "accent" as const, change: "+2.3%" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  success: "stat-card stat-card-success",
  danger: "stat-card stat-card-danger",
  accent: "stat-card stat-card-accent",
};

const emiRecords = [
  {
    id: "EMI001",
    memberId: "1001",
    memberName: "Rahul Sharma",
    product: "Premium Package",
    totalAmount: "₹45,000",
    emiAmount: "₹3,750",
    dueDate: "15 Feb 2026",
    status: "paid",
    paidDate: "14 Feb 2026",
    remainingEmis: 11,
    paymentMethod: "Auto Debit"
  },
  {
    id: "EMI002",
    memberId: "1002",
    memberName: "Priya Patel",
    product: "Standard Package",
    totalAmount: "₹30,000",
    emiAmount: "₹2,500",
    dueDate: "16 Feb 2026",
    status: "pending",
    paidDate: "-",
    remainingEmis: 8,
    paymentMethod: "Manual"
  },
  {
    id: "EMI003",
    memberId: "1003",
    memberName: "Amit Kumar",
    product: "Premium Package",
    totalAmount: "₹45,000",
    emiAmount: "₹3,750",
    dueDate: "14 Feb 2026",
    status: "overdue",
    paidDate: "-",
    remainingEmis: 10,
    paymentMethod: "Manual"
  },
  {
    id: "EMI004",
    memberId: "1004",
    memberName: "Sneha Reddy",
    product: "Basic Package",
    totalAmount: "₹15,000",
    emiAmount: "₹1,250",
    dueDate: "13 Feb 2026",
    status: "paid",
    paidDate: "12 Feb 2026",
    remainingEmis: 5,
    paymentMethod: "Auto Debit"
  }
];

const emiPlans = [
  { name: "Basic Package", duration: "6 months", interest: "0%", totalValue: "₹15,000", members: 45 },
  { name: "Standard Package", duration: "12 months", interest: "0%", totalValue: "₹30,000", members: 78 },
  { name: "Premium Package", duration: "12 months", interest: "0%", totalValue: "₹45,000", members: 122 },
];

const AdminEMI = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-success/10 text-success';
      case 'pending': return 'bg-warning/10 text-warning';
      case 'overdue': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        {/* EMI Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {emiStats.map((stat) => (
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

        {/* EMI Plans Overview */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {emiPlans.map((plan, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-4 font-heading text-base font-semibold text-foreground">{plan.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="font-semibold text-foreground">{plan.duration}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Interest Rate</span>
                  <span className="font-semibold text-success">{plan.interest}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Total Value</span>
                  <span className="font-semibold text-foreground">{plan.totalValue}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-semibold text-primary">{plan.members}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMI Records */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <CreditCard className="h-5 w-5 text-primary" />
              EMI Records
            </h3>
            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4 inline" />
                New EMI
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">EMI ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Member</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Product</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Total Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">EMI Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Due Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Remaining</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {emiRecords.map((record) => (
                  <tr key={record.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{record.id}</td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{record.memberName}</p>
                        <p className="text-xs text-muted-foreground">ID: {record.memberId}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{record.product}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">{record.totalAmount}</td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{record.emiAmount}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{record.dueDate}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(record.status)}`}>
                        {record.status === 'paid' && <CheckCircle className="mr-1 h-3 w-3" />}
                        {record.status === 'pending' && <Clock className="mr-1 h-3 w-3" />}
                        {record.status === 'overdue' && <AlertCircle className="mr-1 h-3 w-3" />}
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{record.remainingEmis} EMIs</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-primary hover:underline">View</button>
                        <button className="text-sm text-warning hover:underline">
                          <Edit className="h-3 w-3" />
                        </button>
                        <button className="text-sm text-destructive hover:underline">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <AlertCircle className="h-5 w-5 text-warning" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Send Reminders</p>
                <p className="text-sm text-muted-foreground">18 overdue</p>
              </div>
            </div>
          </button>
          
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Process Auto-Debit</p>
                <p className="text-sm text-muted-foreground">45 pending</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Download className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Generate Reports</p>
                <p className="text-sm text-muted-foreground">Monthly summary</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Bulk Upload</p>
                <p className="text-sm text-muted-foreground">Import EMIs</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminEMI;
