import { Award, Users, TrendingUp, Crown, Star, Target, Edit, Plus, IndianRupee, Calendar } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const rankStats = [
  { label: "Total Ranks", value: "8", icon: Award, variant: "primary" as const, change: "Active system" },
  { label: "Salary Disbursed", value: "₹4,85,000", icon: IndianRupee, variant: "success" as const, change: "+₹35,000 this month" },
  { label: "Active Rank Holders", value: "156", icon: Users, variant: "accent" as const, change: "+12 new" },
  { label: "Avg. Salary/Member", value: "₹3,108", icon: TrendingUp, variant: "warning" as const, change: "+8.5%" },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  success: "stat-card stat-card-success",
  accent: "stat-card stat-card-accent",
  warning: "stat-card stat-card-warning",
};

const ranks = [
  {
    name: "Distributor",
    minBusiness: "₹10,000",
    monthlySalary: "₹0",
    sponsorSalary: "₹0",
    duration: "-",
    color: "bg-gray-500",
    members: 45,
    icon: "🥉"
  },
  {
    name: "Silver Stockist",
    minBusiness: "₹25,000",
    monthlySalary: "₹2,000",
    sponsorSalary: "₹2,000",
    duration: "20 months",
    color: "bg-gray-400",
    members: 38,
    icon: "🥈"
  },
  {
    name: "Gold Stockist",
    minBusiness: "₹50,000",
    monthlySalary: "₹4,000",
    sponsorSalary: "₹4,000",
    duration: "30 months",
    color: "bg-yellow-600",
    members: 28,
    icon: "🥇"
  },
  {
    name: "Post Stockist",
    minBusiness: "₹1,00,000",
    monthlySalary: "₹6,000",
    sponsorSalary: "₹6,000",
    duration: "40 months",
    color: "bg-blue-500",
    members: 22,
    icon: "💎"
  },
  {
    name: "City Stockist",
    minBusiness: "₹2,00,000",
    monthlySalary: "₹8,000",
    sponsorSalary: "₹8,000",
    duration: "50 months",
    color: "bg-purple-500",
    members: 15,
    icon: "🏆"
  },
  {
    name: "District Stockist",
    minBusiness: "₹5,00,000",
    monthlySalary: "₹12,000",
    sponsorSalary: "₹12,000",
    duration: "60 months",
    color: "bg-red-500",
    members: 6,
    icon: "👑"
  },
  {
    name: "State Stockist",
    minBusiness: "₹10,00,000",
    monthlySalary: "₹18,000",
    sponsorSalary: "₹18,000",
    duration: "72 months",
    color: "bg-orange-500",
    members: 2,
    icon: "🌟"
  },
  {
    name: "National Stockist",
    minBusiness: "₹25,00,000",
    monthlySalary: "₹25,000",
    sponsorSalary: "₹25,000",
    duration: "84 months",
    color: "bg-gradient-to-r from-purple-500 to-orange-500",
    members: 0,
    icon: "🏅"
  }
];

const recentPromotions = [
  {
    memberId: "1001",
    memberName: "Rahul Sharma",
    previousRank: "Gold Stockist",
    newRank: "Post Stockist",
    promotionDate: "10 Feb 2026",
    businessVolume: "₹1,05,000"
  },
  {
    memberId: "1002",
    memberName: "Priya Patel",
    previousRank: "Silver Stockist",
    newRank: "Gold Stockist",
    promotionDate: "08 Feb 2026",
    businessVolume: "₹52,000"
  },
  {
    memberId: "1003",
    memberName: "Amit Kumar",
    previousRank: "Distributor",
    newRank: "Silver Stockist",
    promotionDate: "05 Feb 2026",
    businessVolume: "₹28,000"
  }
];

const salaryDisbursements = [
  {
    month: "February 2026",
    totalAmount: "₹4,85,000",
    members: 156,
    status: "processed",
    processedDate: "15 Feb 2026"
  },
  {
    month: "January 2026",
    totalAmount: "₹4,50,000",
    members: 144,
    status: "processed",
    processedDate: "15 Jan 2026"
  },
  {
    month: "December 2025",
    totalAmount: "₹4,20,000",
    members: 138,
    status: "processed",
    processedDate: "15 Dec 2025"
  }
];

const AdminRanks = () => {
  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        {/* Rank Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {rankStats.map((stat) => (
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

        {/* Ranks Overview */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Crown className="h-5 w-5 text-primary" />
              Rank Structure
            </h3>
            <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4 inline" />
              Add New Rank
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ranks.map((rank, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-8 rounded-full ${rank.color} flex items-center justify-center text-white text-sm font-bold`}>
                      {rank.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{rank.name}</h4>
                      <p className="text-xs text-muted-foreground">{rank.members} members</p>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Min Business</span>
                    <span className="font-medium text-foreground">{rank.minBusiness}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Monthly Salary</span>
                    <span className="font-medium text-success">{rank.monthlySalary}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Sponsor Salary</span>
                    <span className="font-medium text-success">{rank.sponsorSalary}</span>
                  </div>
                  {rank.duration !== "-" && (
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{rank.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Promotions */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Star className="h-5 w-5 text-warning" />
              Recent Promotions
            </h3>
            <div className="space-y-3">
              {recentPromotions.map((promotion, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">{promotion.memberName}</p>
                    <p className="text-xs text-muted-foreground">ID: {promotion.memberId}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-muted-foreground line-through">{promotion.previousRank}</span>
                      <Target className="h-3 w-3 text-primary" />
                      <span className="font-medium text-primary">{promotion.newRank}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{promotion.promotionDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Disbursements */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <IndianRupee className="h-5 w-5 text-success" />
              Salary Disbursements
            </h3>
            <div className="space-y-3">
              {salaryDisbursements.map((disbursement, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">{disbursement.month}</p>
                    <p className="text-xs text-muted-foreground">{disbursement.members} members</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-success">{disbursement.totalAmount}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {disbursement.processedDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rank Requirements Management */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
            <Award className="h-5 w-5 text-primary" />
            Rank Requirements Management
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Min Business Volume</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Direct Referrals</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Team Size</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Monthly Salary</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Duration</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ranks.map((rank, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`h-6 w-6 rounded-full ${rank.color} flex items-center justify-center text-white text-xs`}>
                          {rank.icon}
                        </div>
                        <span className="font-medium text-foreground">{rank.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{rank.minBusiness}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{index * 2 + 1}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{(index + 1) * 5}</td>
                    <td className="px-4 py-3 text-sm font-medium text-success">{rank.monthlySalary}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{rank.duration}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-primary hover:underline">Edit</button>
                        <button className="text-sm text-destructive hover:underline">Delete</button>
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Process Promotions</p>
                <p className="text-sm text-muted-foreground">12 eligible</p>
              </div>
            </div>
          </button>
          
          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                <IndianRupee className="h-5 w-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Disburse Salaries</p>
                <p className="text-sm text-muted-foreground">Monthly process</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                <Target className="h-5 w-5 text-warning" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Review Criteria</p>
                <p className="text-sm text-muted-foreground">Update requirements</p>
              </div>
            </div>
          </button>

          <button className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Star className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Rank Reports</p>
                <p className="text-sm text-muted-foreground">Analytics</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRanks;
