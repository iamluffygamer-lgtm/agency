import { Routes, Route } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import ClientLayout from "./components/layout/ClientLayout"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Home from "./pages/public/Home"
import Services from "./pages/public/Services"
import Portfolio from "./pages/public/Portfolio"
import Pricing from "./pages/public/Pricing"
import Login from "./pages/auth/Login"
import ClientDashboard from "./pages/client/Dashboard"

export default function App() {
  return (
    <Routes>
      {/* Public Marketing Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />

      {/* Protected Client Portal Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<ClientDashboard />} />
          {/* Placeholders for future client routes */}
          <Route path="messages" element={<div className="p-10">Messages coming soon</div>} />
          <Route path="files" element={<div className="p-10">Files coming soon</div>} />
          <Route path="payments" element={<div className="p-10">Payments coming soon</div>} />
        </Route>
      </Route>

      {/* Admin Routes Placeholder */}
      <Route path="/admin/*" element={<div>Admin Portal Placeholder</div>} />
    </Routes>
  )
}
