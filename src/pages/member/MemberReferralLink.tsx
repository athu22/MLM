import MemberLayout from "../../components/layouts/MemberLayout";

const MemberReferralLink = () => {
  return (
    <MemberLayout>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">Referral Link</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your referral link details.</p>
        </div>
        <div className="p-6">
          
        <div className="max-w-xl space-y-6">
          <div className="p-6 border border-border rounded-xl bg-card">
            <h3 className="text-lg font-semibold mb-2">Your Unique Referral Link</h3>
            <p className="text-sm text-muted-foreground mb-4">Share this link with your network to earn direct referral bonuses when they join.</p>
            <div className="flex gap-2">
              <input readOnly value="https://jamplelife.com/register?ref=JL1001" className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm focus:outline-none" />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium shrink-0 hover:bg-primary/90">Copy</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-xl bg-card text-center">
              <p className="text-sm text-muted-foreground">Total Clicks</p>
              <p className="text-2xl font-bold mt-1">142</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-card text-center">
              <p className="text-sm text-muted-foreground">Successful Signups</p>
              <p className="text-2xl font-bold mt-1 text-success">12</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberReferralLink;
