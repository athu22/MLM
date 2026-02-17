import AdminLayout from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserCheck, UserX, Eye, Edit, Ban } from "lucide-react";
import { useState } from "react";

const users = [
  { id: "1001", name: "Rahul Sharma", mobile: "9876543210", sponsor: "Admin", rank: "Post Stockist", kyc: "Verified", emi: "3/6", status: "Active" },
  { id: "1002", name: "Amit Patil", mobile: "9876543211", sponsor: "1001", rank: "Stockist", kyc: "Verified", emi: "5/6", status: "Active" },
  { id: "1003", name: "Sneha Joshi", mobile: "9876543212", sponsor: "1001", rank: "Stockist", kyc: "Pending", emi: "2/6", status: "Active" },
  { id: "1004", name: "Sanjay More", mobile: "9876543213", sponsor: "1002", rank: "-", kyc: "Verified", emi: "6/6", status: "Active" },
  { id: "1005", name: "Priya Desai", mobile: "9876543214", sponsor: "1002", rank: "-", kyc: "Rejected", emi: "1/6", status: "Blocked" },
  { id: "1006", name: "Ravi Kumar", mobile: "9876543215", sponsor: "1003", rank: "-", kyc: "Pending", emi: "0/6", status: "Inactive" },
];

const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.id.includes(search) ||
      u.mobile.includes(search)
  );

  return (
    <AdminLayout>
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, ID or mobile..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span className="rounded-lg bg-success/10 px-3 py-1.5 font-medium text-success">Active: {users.filter(u => u.status === "Active").length}</span>
            <span className="rounded-lg bg-destructive/10 px-3 py-1.5 font-medium text-destructive">Blocked: {users.filter(u => u.status === "Blocked").length}</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Mobile</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Sponsor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Rank</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">KYC</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">EMI</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="px-4 py-3 text-sm font-medium text-primary">{u.id}</td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{u.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{u.mobile}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{u.sponsor}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{u.rank}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        u.kyc === "Verified" ? "bg-success/10 text-success" :
                        u.kyc === "Rejected" ? "bg-destructive/10 text-destructive" :
                        "bg-warning/10 text-warning"
                      }`}>{u.kyc}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-foreground">{u.emi}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        u.status === "Active" ? "bg-success/10 text-success" :
                        u.status === "Blocked" ? "bg-destructive/10 text-destructive" :
                        "bg-muted text-muted-foreground"
                      }`}>{u.status}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-1">
                        <Button size="icon" variant="ghost" className="h-7 w-7">
                          <Eye className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7">
                          <Edit className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive">
                          <Ban className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
