import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Public Pages
import Index from "./pages/Index";
import Products from "./pages/Products";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/public/AboutUs";
import Vision from "./pages/public/Vision";
import Management from "./pages/public/Management";
import LegalDocuments from "./pages/public/LegalDocuments";
import BusinessPlan from "./pages/public/BusinessPlan";
import Compensation from "./pages/public/Compensation";
import RanksRewards from "./pages/public/RanksRewards";

// Member Pages
import MemberLogin from "./pages/member/MemberLogin";
import MemberDashboard from "./pages/member/MemberDashboard";
import MemberBinaryTree from "./pages/member/MemberBinaryTree";
import MemberIncome from "./pages/member/MemberIncome";
import MemberIncomeDaily from "./pages/member/MemberIncomeDaily";
import MemberIncomeReferral from "./pages/member/MemberIncomeReferral";
import MemberIncomeLevel from "./pages/member/MemberIncomeLevel";
import MemberIncomeBonus from "./pages/member/MemberIncomeBonus";
import MemberEMI from "./pages/member/MemberEMI";
import MemberWallet from "./pages/member/MemberWallet";
import MemberRecharge from "./pages/member/MemberRecharge";
import MemberWithdraw from "./pages/member/MemberWithdraw";
import MemberTransactionHistory from "./pages/member/MemberTransactionHistory";
import MemberRank from "./pages/member/MemberRank";
import MemberProfile from "./pages/member/MemberProfile";
import MemberEditProfile from "./pages/member/MemberEditProfile";
import MemberChangePassword from "./pages/member/MemberChangePassword";
import MemberTeam from "./pages/member/MemberTeam";
import MemberTeamDirect from "./pages/member/MemberTeamDirect";
import MemberTeamLevel from "./pages/member/MemberTeamLevel";
import MemberSupport from "./pages/member/MemberSupport";
import MemberTaskDaily from "./pages/member/MemberTaskDaily";
import MemberTaskHistory from "./pages/member/MemberTaskHistory";
import MemberReferralLink from "./pages/member/MemberReferralLink";
import MemberReports from "./pages/member/MemberReports";
import MemberSettings from "./pages/member/MemberSettings";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminUserAdd from "./pages/admin/AdminUserAdd";
import AdminUserEdit from "./pages/admin/AdminUserEdit";
import AdminIncome from "./pages/admin/AdminIncome";
import AdminEMI from "./pages/admin/AdminEMI";
import AdminRanks from "./pages/admin/AdminRanks";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminReports from "./pages/admin/AdminReports";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminWalletRecharge from "./pages/admin/AdminWalletRecharge";
import AdminWalletWithdraw from "./pages/admin/AdminWalletWithdraw";
import AdminWalletHistory from "./pages/admin/AdminWalletHistory";
import AdminPlan from "./pages/admin/AdminPlan";
import AdminTask from "./pages/admin/AdminTask";
import AdminNotice from "./pages/admin/AdminNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          
          {/* Public Subpage Routes */}
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/vision" element={<Vision />} />
          <Route path="/company/management" element={<Management />} />
          <Route path="/company/legal" element={<LegalDocuments />} />
          
          <Route path="/opportunities/business-plan" element={<BusinessPlan />} />
          <Route path="/opportunities/compensation" element={<Compensation />} />
          <Route path="/opportunities/ranks-rewards" element={<RanksRewards />} />

          {/* Member Routes */}
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/member/binary-tree" element={<MemberBinaryTree />} />
          <Route path="/member/income" element={<MemberIncome />} />
          <Route path="/member/income/daily" element={<MemberIncomeDaily />} />
          <Route path="/member/income/referral" element={<MemberIncomeReferral />} />
          <Route path="/member/income/level" element={<MemberIncomeLevel />} />
          <Route path="/member/income/bonus" element={<MemberIncomeBonus />} />
          <Route path="/member/emi" element={<MemberEMI />} />
          <Route path="/member/wallet" element={<MemberWallet />} />
          <Route path="/member/wallet/recharge" element={<MemberRecharge />} />
          <Route path="/member/wallet/withdraw" element={<MemberWithdraw />} />
          <Route path="/member/wallet/history" element={<MemberTransactionHistory />} />
          <Route path="/member/team" element={<MemberTeam />} />
          <Route path="/member/team/direct" element={<MemberTeamDirect />} />
          <Route path="/member/team/level" element={<MemberTeamLevel />} />
          <Route path="/member/rank" element={<MemberRank />} />
          <Route path="/member/profile" element={<MemberProfile />} />
          <Route path="/member/profile/edit" element={<MemberEditProfile />} />
          <Route path="/member/profile/password" element={<MemberChangePassword />} />
          <Route path="/member/support" element={<MemberSupport />} />
          <Route path="/member/tasks/daily" element={<MemberTaskDaily />} />
          <Route path="/member/tasks/history" element={<MemberTaskHistory />} />
          <Route path="/member/referral-link" element={<MemberReferralLink />} />
          <Route path="/member/reports" element={<MemberReports />} />
          <Route path="/member/settings" element={<MemberSettings />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/add" element={<AdminUserAdd />} />
          <Route path="/admin/users/edit" element={<AdminUserEdit />} />
          <Route path="/admin/income" element={<AdminIncome />} />
          <Route path="/admin/emi" element={<AdminEMI />} />
          <Route path="/admin/ranks" element={<AdminRanks />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/wallet/recharge" element={<AdminWalletRecharge />} />
          <Route path="/admin/wallet/withdraw" element={<AdminWalletWithdraw />} />
          <Route path="/admin/wallet/history" element={<AdminWalletHistory />} />
          <Route path="/admin/plans" element={<AdminPlan />} />
          <Route path="/admin/tasks" element={<AdminTask />} />
          <Route path="/admin/notices" element={<AdminNotice />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
