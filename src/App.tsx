import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import JourneysPage from "./pages/JourneysPage.tsx";
import JourneyDetailPage from "./pages/JourneyDetailPage.tsx";
import AdvicePage from "./pages/AdvicePage.tsx";
import AdviceDetailPage from "./pages/AdviceDetailPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/journey/:id" element={<JourneyDetailPage />} />
          <Route path="/advice" element={<AdvicePage />} />
          <Route path="/advice/:id" element={<AdviceDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
