import MemberLayout from "../../components/layouts/MemberLayout";

const MemberWithdraw = () => {
  return (
    <MemberLayout>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">Withdraw</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your withdraw details.</p>
        </div>
        <div className="p-6">
          
        <div className="max-w-md space-y-4">
          <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-accent">Current Balance</h3>
            <p className="text-3xl font-bold mt-1">₹5,000</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">Amount to Withdraw</label>
            <input type="number" placeholder="0.00" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">Select Payment Method</label>
            <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>UPI / Bank Transfer</option>
              <option>Credit/Debit Card</option>
              <option>Crypto Wallet</option>
            </select>
          </div>
          <button className="w-full bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md mt-4 hover:opacity-90 transition-opacity">Submit Request</button>
        </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberWithdraw;
