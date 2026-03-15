import MemberLayout from "../../components/layouts/MemberLayout";

const MemberEditProfile = () => {
  return (
    <MemberLayout>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">Edit Profile</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your edit profile details.</p>
        </div>
        <div className="p-6">
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Full Name</label>
              <input type="text" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="Rahul Sharma" />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Email</label>
              <input type="email" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="rahul@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Phone Number</label>
              <input type="tel" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="+91 9876543210" />
            </div>
            <button className="bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md mt-4 hover:opacity-90 transition-opacity">Save Changes</button>
          </div>
        </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberEditProfile;
