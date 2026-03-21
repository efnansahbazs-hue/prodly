import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/hooks/useLang";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminPromoCodes from "./pages/AdminPromoCodes.tsx";
import TechniquesPage from "./pages/TechniquesPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CommunityPage from "./pages/CommunityPage.tsx";

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
            <Route path="/admin/promo-codes" element={<AdminPromoCodes />} />
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
