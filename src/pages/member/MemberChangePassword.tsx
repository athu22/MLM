import MemberLayout from "../../components/layouts/MemberLayout";

const MemberChangePassword = () => {
  return (
    <MemberLayout>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">Change Password</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your change password details.</p>
        </div>
        <div className="p-6">
          
        <div className="max-w-md space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">Current Password</label>
            <input type="password" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">New Password</label>
            <input type="password" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">Confirm New Password</label>
            <input type="password" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button className="bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md mt-4 hover:opacity-90 transition-opacity">Update Password</button>
        </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberChangePassword;
