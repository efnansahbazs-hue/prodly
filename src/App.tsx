import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/hooks/useLang";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import TechniquesPage from "./pages/TechniquesPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CommunityPage from "./pages/CommunityPage.tsx";
import SuggestionsPage from "./pages/SuggestionsPage.tsx";
import RoadmapPage from "./pages/RoadmapPage.tsx";
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
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
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
