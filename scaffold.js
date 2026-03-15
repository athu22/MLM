import fs from 'fs';
import path from 'path';

const pages = [
  // Member Pages
  'src/pages/member/MemberEditProfile.tsx',
  'src/pages/member/MemberChangePassword.tsx',
  'src/pages/member/MemberRecharge.tsx',
  'src/pages/member/MemberWithdraw.tsx',
  'src/pages/member/MemberTransactionHistory.tsx',
  'src/pages/member/MemberIncomeDaily.tsx',
  'src/pages/member/MemberIncomeReferral.tsx',
  'src/pages/member/MemberIncomeLevel.tsx',
  'src/pages/member/MemberIncomeBonus.tsx',
  'src/pages/member/MemberTaskDaily.tsx',
  'src/pages/member/MemberTaskHistory.tsx',
  'src/pages/member/MemberReferralLink.tsx',
  'src/pages/member/MemberTeamDirect.tsx',
  'src/pages/member/MemberTeamLevel.tsx',
  'src/pages/member/MemberReports.tsx',
  'src/pages/member/MemberSettings.tsx',

  // Admin Pages
  'src/pages/admin/AdminUserAdd.tsx',
  'src/pages/admin/AdminUserEdit.tsx',
  'src/pages/admin/AdminWalletRecharge.tsx',
  'src/pages/admin/AdminWalletWithdraw.tsx',
  'src/pages/admin/AdminWalletHistory.tsx',
  'src/pages/admin/AdminPlan.tsx',
  'src/pages/admin/AdminTask.tsx',
  'src/pages/admin/AdminNotice.tsx',
];

pages.forEach(page => {
  const componentName = path.basename(page, '.tsx');
  const dirName = path.basename(path.dirname(page));
  const LayoutType = dirName === 'admin' ? 'AdminLayout' : 'MemberLayout';
  const layoutPath = `../../components/layouts/${LayoutType}`;

  const content = `import ${LayoutType} from "${layoutPath}";

const ${componentName} = () => {
  return (
    <${LayoutType}>
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h2 className="text-2xl font-bold mb-4 font-heading text-foreground">${componentName.replace(/([A-Z])/g, ' $1').trim()}</h2>
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
    </${LayoutType}>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(path.join(process.cwd(), page), content);
  console.log(`Created ${page}`);
});
