import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Member Pages
import MemberLogin from "./pages/member/MemberLogin";
import MemberDashboard from "./pages/member/MemberDashboard";
import MemberBinaryTree from "./pages/member/MemberBinaryTree";
import MemberIncome from "./pages/member/MemberIncome";
import MemberEMI from "./pages/member/MemberEMI";
import MemberWallet from "./pages/member/MemberWallet";
import MemberRank from "./pages/member/MemberRank";
import MemberProfile from "./pages/member/MemberProfile";
import MemberTeam from "./pages/member/MemberTeam";
import MemberSupport from "./pages/member/MemberSupport";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminIncome from "./pages/admin/AdminIncome";
import AdminEMI from "./pages/admin/AdminEMI";
import AdminRanks from "./pages/admin/AdminRanks";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminReports from "./pages/admin/AdminReports";
import AdminSettings from "./pages/admin/AdminSettings";

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

          {/* Member Routes */}
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/member/binary-tree" element={<MemberBinaryTree />} />
          <Route path="/member/income" element={<MemberIncome />} />
          <Route path="/member/emi" element={<MemberEMI />} />
          <Route path="/member/wallet" element={<MemberWallet />} />
          <Route path="/member/team" element={<MemberTeam />} />
          <Route path="/member/rank" element={<MemberRank />} />
          <Route path="/member/profile" element={<MemberProfile />} />
          <Route path="/member/support" element={<MemberSupport />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/income" element={<AdminIncome />} />
          <Route path="/admin/emi" element={<AdminEMI />} />
          <Route path="/admin/ranks" element={<AdminRanks />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
