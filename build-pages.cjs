const fs = require('fs');
const path = require('path');

// Helper to write generic UI structure
function rewriteFile(filePath, title, type="table") {
  const absolutePath = path.join(__dirname, filePath);
  if (!fs.existsSync(absolutePath)) return;

  const componentName = path.basename(filePath, '.tsx');
  const LayoutType = filePath.includes('admin') ? 'AdminLayout' : 'MemberLayout';
  const layoutPath = filePath.includes('admin') ? '../../components/layouts/AdminLayout' : '../../components/layouts/MemberLayout';

  let innerContent = '';

  if (title === 'Edit Profile') {
    innerContent = `
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
        </div>`;
  } else if (title === 'Change Password') {
    innerContent = `
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
        </div>`;
  } else if (title === 'Recharge' || title === 'Withdraw') {
    innerContent = `
        <div className="max-w-md space-y-4">
          <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-accent">Current Balance</h3>
            <p className="text-3xl font-bold mt-1">₹5,000</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">Amount to ${title}</label>
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
        </div>`;
  } else if (title === 'Referral Link') {
    innerContent = `
        <div className="max-w-xl space-y-6">
          <div className="p-6 border border-border rounded-xl bg-card">
            <h3 className="text-lg font-semibold mb-2">Your Unique Referral Link</h3>
            <p className="text-sm text-muted-foreground mb-4">Share this link with your network to earn direct referral bonuses when they join.</p>
            <div className="flex gap-2">
              <input readOnly value="https://jamplelife.com/register?ref=JM1001" className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm focus:outline-none" />
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
        </div>`;
  } else if (type === 'table') {
    innerContent = `
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium rounded-tl-lg">ID / Reference</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Description</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-medium">#TRX-00\${i}</td>
                  <td className="px-4 py-3 text-muted-foreground">2026-03-\${10+i}</td>
                  <td className="px-4 py-3">System generated record</td>
                  <td className="px-4 py-3 font-semibold text-emerald-500">+\${i * 500}</td>
                  <td className="px-4 py-3">
                    <span className="bg-success/20 text-success px-2 py-1 rounded text-xs">Completed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>`;
  } else {
    innerContent = `<div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">Module logic goes here</div>`;
  }

  const content = `import ${LayoutType} from "${layoutPath}";

const ${componentName} = () => {
  return (
    <${LayoutType}>
      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/20">
          <h2 className="text-2xl font-bold font-heading text-foreground">${title}</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your ${title.toLowerCase()} details.</p>
        </div>
        <div className="p-6">
          ${innerContent}
        </div>
      </div>
    </${LayoutType}>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(absolutePath, content);
}

// Member Tables
rewriteFile('src/pages/member/MemberTransactionHistory.tsx', 'Transaction History', 'table');
rewriteFile('src/pages/member/MemberIncomeDaily.tsx', 'Daily Income', 'table');
rewriteFile('src/pages/member/MemberIncomeReferral.tsx', 'Referral Income', 'table');
rewriteFile('src/pages/member/MemberIncomeLevel.tsx', 'Level Income', 'table');
rewriteFile('src/pages/member/MemberIncomeBonus.tsx', 'Bonus Income', 'table');
rewriteFile('src/pages/member/MemberTaskHistory.tsx', 'Task History', 'table');
rewriteFile('src/pages/member/MemberTeamDirect.tsx', 'Direct Team', 'table');
rewriteFile('src/pages/member/MemberTeamLevel.tsx', 'Level Team', 'table');

// Member Forms / Specifics
rewriteFile('src/pages/member/MemberEditProfile.tsx', 'Edit Profile', 'form');
rewriteFile('src/pages/member/MemberChangePassword.tsx', 'Change Password', 'form');
rewriteFile('src/pages/member/MemberRecharge.tsx', 'Recharge', 'form');
rewriteFile('src/pages/member/MemberWithdraw.tsx', 'Withdraw', 'form');
rewriteFile('src/pages/member/MemberReferralLink.tsx', 'Referral Link', 'custom');

// Admin Tables
rewriteFile('src/pages/admin/AdminUserAdd.tsx', 'Add New User', 'form');
rewriteFile('src/pages/admin/AdminUserEdit.tsx', 'Edit User', 'form');
rewriteFile('src/pages/admin/AdminWalletRecharge.tsx', 'Recharge Requests', 'table');
rewriteFile('src/pages/admin/AdminWalletWithdraw.tsx', 'Withdraw Requests', 'table');
rewriteFile('src/pages/admin/AdminWalletHistory.tsx', 'Wallet Transaction History', 'table');
rewriteFile('src/pages/admin/AdminPlan.tsx', 'Plan Management', 'table');
rewriteFile('src/pages/admin/AdminTask.tsx', 'Task Management', 'table');
rewriteFile('src/pages/admin/AdminNotice.tsx', 'Announcements & Notices', 'table');

console.log('Pages rebuilt!');
