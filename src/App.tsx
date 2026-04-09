import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/hooks/useLang";
import { AdminAuthProvider } from "./contexts/AdminAuthContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import TechniquesPage from "./pages/TechniquesPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CommunityPage from "./pages/CommunityPage.tsx";
import SuggestionsPage from "./pages/SuggestionsPage.tsx";
import RoadmapPage from "./pages/RoadmapPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import OnboardingPage from "./pages/OnboardingPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import EffectsPage from "./pages/EffectsPage.tsx";
import PluginsPage from "./pages/PluginsPage.tsx";
import AdminLayout from "./pages/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminUsers from "./pages/admin/AdminUsers.tsx";
import AdminReports from "./pages/admin/AdminReports.tsx";
import AdminSuggestions from "./pages/admin/AdminSuggestions.tsx";
import AdminSubscriptions from "./pages/admin/AdminSubscriptions.tsx";
import AdminCommunity from "./pages/admin/AdminCommunity.tsx";
import AdminPromoCodesPage from "./pages/admin/AdminPromoCodesPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LangProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:username" element={<ProfilePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/community/library" element={<CommunityPage />} />
              <Route path="/community/challenges" element={<CommunityPage />} />
              <Route path="/community/lounge" element={<CommunityPage />} />
              <Route path="/community/trending" element={<CommunityPage />} />
              <Route path="/community/collab" element={<CommunityPage />} />
              <Route path="/suggestions" element={<SuggestionsPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/tools/effects" element={<EffectsPage />} />
              <Route path="/tools/plugins" element={<PluginsPage />} />
              <Route path="/techniques" element={<TechniquesPage />} />
            </Route>

            {/* Admin — guarded by Supabase email check */}
            <Route
              path="/admin"
              element={<AdminAuthProvider><AdminLayout /></AdminAuthProvider>}
            >
              <Route index element={<AdminDashboard />} />
              <Route path="login" element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="reports" element={<AdminReports />} />
              <Route path="suggestions" element={<AdminSuggestions />} />
              <Route path="subscriptions" element={<AdminSubscriptions />} />
              <Route path="community" element={<AdminCommunity />} />
              <Route path="promo-codes" element={<AdminPromoCodesPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
