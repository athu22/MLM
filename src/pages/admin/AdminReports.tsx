import { BarChart3, TrendingUp, Users, DollarSign, Download, Calendar, Filter, FileText, PieChart, Activity, Target } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const reportStats = [
  { label: "Total Revenue", value: "₹45,60,000", icon: DollarSign, variant: "primary" as const, change: "+12.5%" },
  { label: "Active Members", value: "1,245", icon: Users, variant: "success" as const, change: "+85 this month" },
  { label: "Growth Rate", value: "18.3%", icon: TrendingUp, variant: "accent" as const, change: "+3.2%" },
  { label: "Reports Generated", value: "156", icon: FileText, variant: "warning" as const, change: "This month" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  success: "stat-card stat-card-success",
  accent: "stat-card stat-card-accent",
  warning: "stat-card stat-card-warning",
};

const monthlyRevenue = [
  { month: "Aug 2025", revenue: "₹3,20,000", members: 850, growth: "+8.2%" },
  { month: "Sep 2025", revenue: "₹3,45,000", members: 890, growth: "+7.8%" },
  { month: "Oct 2025", revenue: "₹3,80,000", members: 945, growth: "+10.1%" },
  { month: "Nov 2025", revenue: "₹4,10,000", members: 1020, growth: "+7.9%" },
  { month: "Dec 2025", revenue: "₹4,50,000", members: 1100, growth: "+9.8%" },
  { month: "Jan 2026", revenue: "₹4,85,000", members: 1180, growth: "+7.8%" },
  { month: "Feb 2026", revenue: "₹5,20,000", members: 1245, growth: "+7.2%" }
];

const topPerformers = [
  { rank: 1, name: "Rahul Sharma", id: "1001", revenue: "₹2,45,000", teamSize: 45, memberRank: "Post Stockist" },
  { rank: 2, name: "Priya Patel", id: "1002", revenue: "₹1,85,000", teamSize: 38, memberRank: "Gold Stockist" },
  { rank: 3, name: "Amit Kumar", id: "1003", revenue: "₹1,65,000", teamSize: 32, memberRank: "Gold Stockist" },
  { rank: 4, name: "Sneha Reddy", id: "1004", revenue: "₹1,45,000", teamSize: 28, memberRank: "Silver Stockist" },
  { rank: 5, name: "Rajesh Singh", id: "1005", revenue: "₹1,25,000", teamSize: 25, memberRank: "Silver Stockist" }
];

const categoryPerformance = [
  { category: "Health Products", revenue: "₹18,50,000", percentage: 40.6, color: "bg-blue-500", growth: "+15.2%" },
  { category: "Wellness Products", revenue: "₹12,20,000", percentage: 26.8, color: "bg-green-500", growth: "+10.8%" },
  { category: "Beauty Products", revenue: "₹9,80,000", percentage: 21.5, color: "bg-pink-500", growth: "+8.5%" },
  { category: "Fitness Products", revenue: "₹5,10,000", percentage: 11.1, color: "bg-orange-500", growth: "+12.3%" }
];

const recentReports = [
  { id: "RPT001", name: "Monthly Revenue Report", type: "Revenue", generatedDate: "15 Feb 2026", status: "completed", size: "2.4 MB" },
  { id: "RPT002", name: "Member Performance Analysis", type: "Performance", generatedDate: "14 Feb 2026", status: "completed", size: "1.8 MB" },
  { id: "RPT003", name: "Product Sales Report", type: "Sales", generatedDate: "13 Feb 2026", status: "processing", size: "-" },
  { id: "RPT004", name: "Commission Payout Summary", type: "Commission", generatedDate: "12 Feb 2026", status: "completed", size: "3.1 MB" }
];

const AdminReports = () => {
  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        {/* Report Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reportStats.map((stat) => (
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

        {/* Revenue Overview */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <BarChart3 className="h-5 w-5 text-primary" />
              Monthly Revenue Trend
            </h3>
            <div className="space-y-3">
              {monthlyRevenue.map((item, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.month}</p>
                      <p className="text-xs text-muted-foreground">{item.members} members</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{item.revenue}</p>
                    <p className="text-xs text-success">{item.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Performance */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <PieChart className="h-5 w-5 text-success" />
              Category Performance
            </h3>
            <div className="space-y-3">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">{category.revenue}</span>
                      <span className="text-xs text-success">{category.growth}</span>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className={`h-full ${category.color} transition-all duration-300`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <Target className="h-5 w-5 text-accent" />
            Top Performers This Month
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Member</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Revenue</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Team Size</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Current Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Performance</th>
                </tr>
              </thead>
              <tbody>
                {topPerformers.map((performer) => (
                  <tr key={performer.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-white ${
                        performer.rank === 1 ? 'bg-yellow-500' :
                        performer.rank === 2 ? 'bg-gray-400' :
                        performer.rank === 3 ? 'bg-orange-600' : 'bg-muted text-muted-foreground'
                      }`}>
                        {performer.rank}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{performer.name}</p>
                        <p className="text-xs text-muted-foreground">ID: {performer.id}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">{performer.revenue}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{performer.teamSize} members</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{performer.memberRank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Activity className="h-4 w-4 text-success" />
                        <span className="text-sm text-success">Excellent</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <FileText className="h-5 w-5 text-primary" />
              Generated Reports
            </h3>
            <div className="flex items-center gap-2">
              <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4 inline" />
                Generate Report
              </button>
              <button className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                <Filter className="mr-2 h-4 w-4 inline" />
                Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Report ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Report Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Generated Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Size</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report) => (
                  <tr key={report.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{report.id}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{report.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{report.type}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{report.generatedDate}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        report.status === 'completed' 
                          ? 'bg-success/10 text-success'
                          : 'bg-warning/10 text-warning'
                      }`}>
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{report.size}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-primary hover:underline">
                          <Download className="mr-1 h-3 w-3 inline" />
                          Download
                        </button>
                        <button className="text-sm text-warning hover:underline">View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Report Actions */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Revenue Report</p>
                <p className="text-sm text-muted-foreground">Monthly/Yearly</p>
              </div>
            </div>
          </button>
          
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <Users className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Member Report</p>
                <p className="text-sm text-muted-foreground">Performance analysis</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <BarChart3 className="h-5 w-5 text-warning" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Sales Report</p>
                <p className="text-sm text-muted-foreground">Product analysis</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Custom Report</p>
                <p className="text-sm text-muted-foreground">Build your own</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
