import { Users, UserPlus, Calendar, Mail, Phone, Star, TrendingUp, Crown, X, Plus } from "lucide-react";
import MemberLayout from "@/components/layouts/MemberLayout";
import { useState } from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: "1002",
    name: "Priya Patel",
    joinDate: "15 Jan 2026",
    email: "priya.p@email.com",
    phone: "+91 98765 43210",
    rank: "Silver Stockist",
    status: "active",
    team: "left",
    totalBusiness: "₹45,000"
  },
  {
    id: "1003", 
    name: "Amit Kumar",
    joinDate: "22 Jan 2026",
    email: "amit.k@email.com",
    phone: "+91 87654 32109",
    rank: "Bronze Stockist",
    status: "active",
    team: "right",
    totalBusiness: "₹32,000"
  },
  {
    id: "1004",
    name: "Sneha Reddy",
    joinDate: "05 Feb 2026",
    email: "sneha.r@email.com", 
    phone: "+91 76543 21098",
    rank: "Distributor",
    status: "active",
    team: "left",
    totalBusiness: "₹28,000"
  },
  {
    id: "1005",
    name: "Rajesh Singh",
    joinDate: "10 Feb 2026",
    email: "rajesh.s@email.com",
    phone: "+91 65432 10987",
    rank: "Distributor",
    status: "inactive",
    team: "right",
    totalBusiness: "₹15,000"
  }
];

const teamStats = [
  { label: "Total Team Members", value: "42", icon: Users, variant: "primary" as const },
  { label: "Direct Referrals", value: "8", icon: UserPlus, variant: "secondary" as const },
  { label: "Active Members", value: "38", icon: TrendingUp, variant: "success" as const },
  { label: "Top Performers", value: "5", icon: Crown, variant: "accent" as const },
];

const variantClasses = {
  primary: "stat-card stat-card-primary",
  secondary: "stat-card stat-card-secondary", 
  success: "stat-card stat-card-success",
  accent: "stat-card stat-card-accent",
};

const MemberTeam = () => {
  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        {/* Team Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {teamStats.map((stat) => (
            <div key={stat.label} className={variantClasses[stat.variant]}>
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 opacity-80" />
              </div>
              <p className="mt-3 text-2xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Team */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Users className="h-5 w-5 text-blue-500" />
              Left Team
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Total Members</span>
                <span className="font-semibold text-foreground">24</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Active Members</span>
                <span className="font-semibold text-success">22</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Total Business</span>
                <span className="font-semibold text-foreground">₹2,45,000</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">This Month</span>
                <span className="font-semibold text-primary">₹35,000</span>
              </div>
            </div>
          </div>

          {/* Right Team */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Users className="h-5 w-5 text-green-500" />
              Right Team
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Total Members</span>
                <span className="font-semibold text-foreground">18</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Active Members</span>
                <span className="font-semibold text-success">16</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">Total Business</span>
                <span className="font-semibold text-foreground">₹1,85,000</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                <span className="text-sm text-muted-foreground">This Month</span>
                <span className="font-semibold text-primary">₹28,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Table */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Users className="h-5 w-5 text-primary" />
              Team Members
            </h3>
            <Link 
              to="/register"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <UserPlus className="mr-2 h-4 w-4 inline" />
              Add Member
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Member</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Join Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Team</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Business</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-foreground">{member.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {member.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{member.id}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {member.joinDate}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        member.team === 'left' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {member.team.charAt(0).toUpperCase() + member.team.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm text-foreground">{member.rank}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{member.totalBusiness}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        member.status === 'active'
                          ? 'bg-success/10 text-success'
                          : 'bg-destructive/10 text-destructive'
                      }`}>
                        {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-primary hover:underline">View Details</button>
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

export default MemberTeam;
