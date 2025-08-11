
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import LiveStreams from "./pages/LiveStreams";
import Programs from "./pages/Programs";
import Leadership from "./pages/Leadership";
import Dashboard from "./pages/Dashboard";
import DuesPayment from "./pages/DuesPayment";
import NotFound from "./pages/NotFound";


const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/live-streams" element={<LiveStreams />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dues-payment" element={<DuesPayment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  </TooltipProvider>
);

export default App;
