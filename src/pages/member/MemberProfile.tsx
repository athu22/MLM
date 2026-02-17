import MemberLayout from "@/components/layouts/MemberLayout";
import { UserCircle, Shield, Building, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MemberProfile = () => {
  return (
    <MemberLayout>
      <div className="animate-fade-in space-y-6">
        {/* Profile Header */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              RS
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">Rahul Sharma</h3>
              <p className="text-sm text-muted-foreground">Member ID: 1001</p>
              <div className="mt-2 flex gap-2">
                <Badge className="bg-success/10 text-success hover:bg-success/20">KYC Verified</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Post Stockist</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Personal Info */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <UserCircle className="h-5 w-5 text-primary" />
              Personal Information
            </h3>
            <div className="space-y-3">
              {[
                ["Name", "Rahul Sharma"],
                ["Mobile", "+91 98765 43210"],
                ["Email", "rahul@example.com"],
                ["Sponsor ID", "1000"],
                ["Sponsor Name", "Admin"],
                ["Joining Date", "15 Aug 2025"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-2 last:border-0">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KYC Details */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Shield className="h-5 w-5 text-secondary" />
              KYC Details
            </h3>
            <div className="space-y-3">
              {[
                ["Aadhaar Number", "XXXX XXXX 4567"],
                ["PAN Number", "XXXXX1234X"],
                ["KYC Status", "Verified ✅"],
                ["Nominee", "Priya Sharma"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-2 last:border-0">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <Building className="h-5 w-5 text-accent" />
              Bank Details
            </h3>
            <div className="space-y-3">
              {[
                ["Bank Name", "State Bank of India"],
                ["Account No.", "XXXX XXXX 7890"],
                ["IFSC Code", "SBIN0001234"],
                ["Branch", "Pune Main Branch"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-2 last:border-0">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PDC Details */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-base font-semibold text-foreground">
              <FileText className="h-5 w-5 text-destructive" />
              PDC (Post Dated Cheques)
            </h3>
            <div className="space-y-3">
              {[
                ["Total Cheques", "6"],
                ["Submitted", "6"],
                ["Cleared", "3"],
                ["Pending", "3"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-2 last:border-0">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberProfile;
