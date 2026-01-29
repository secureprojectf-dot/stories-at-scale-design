import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import { Toaster } from "@/components/ui/sonner";

// Auth
import AuthPage from "@/pages/auth/AuthPage";

// Admin Routes
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminLayout from "@/pages/admin/AdminLayout";
import DashboardOverview from "@/pages/admin/Dashboard";
import ClientsList from "@/pages/admin/ClientsList";
import ProjectsList from "@/pages/admin/ProjectsList";
import SubmissionsList from "@/pages/admin/SubmissionsList";
import TicketsList from "@/pages/admin/TicketsList";

// Customer Routes
import CustomerLayout from "@/pages/customer/CustomerLayout";
import CustomerDashboard from "@/pages/customer/CustomerDashboard";

// Team Routes
import TeamLayout from "@/pages/team/TeamLayout";
import TeamDashboard from "@/pages/team/TeamDashboard";

// Legacy Client Routes (for backwards compatibility)
import ClientLogin from "@/pages/client/ClientLogin";
import ClientLayout from "@/pages/client/ClientLayout";
import ClientDashboard from "@/pages/client/ClientDashboard";
import ProjectForm from "@/pages/client/ProjectForm";
import TicketForm from "@/pages/client/TicketForm";
import FeedbackForm from "@/pages/client/FeedbackForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* New Auth Routes */}
        <Route path="/auth/:role" element={<AuthPage />} />

        {/* Customer Portal (New) */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<Navigate to="/customer/dashboard" replace />} />
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="projects" element={<CustomerDashboard />} />
          <Route path="support" element={<CustomerDashboard />} />
          <Route path="settings" element={<CustomerDashboard />} />
        </Route>

        {/* Team Portal (New) */}
        <Route path="/team" element={<TeamLayout />}>
          <Route index element={<Navigate to="/team/dashboard" replace />} />
          <Route path="dashboard" element={<TeamDashboard />} />
          <Route path="projects" element={<TeamDashboard />} />
          <Route path="members" element={<TeamDashboard />} />
          <Route path="schedule" element={<TeamDashboard />} />
          <Route path="settings" element={<TeamDashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="clients" element={<ClientsList />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="submissions" element={<SubmissionsList />} />
          <Route path="tickets" element={<TicketsList />} />
        </Route>

        {/* Legacy Client Routes */}
        <Route path="/client" element={<ClientLogin />} />
        <Route path="/client/portal" element={<ClientLayout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="new-project" element={<ProjectForm />} />
          <Route path="tickets" element={<TicketForm />} />
          <Route path="feedback" element={<FeedbackForm />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
