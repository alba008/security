import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import CareersPage from "./pages/CareersPage";
import RequestQuotePage from "./pages/RequestQuotePage";

import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LeadershipPage from "./pages/LeadershipPage";
import AcademyPage from "./pages/AcademyPage";
import ScrollToTop from "./components/ScrollToTop";
import ManagementPage from "./pages/ManagementPage";


export default function App() {
  return (
    <Box
      sx={{
        background: "#05070d",
        color: "#fff",
        minHeight: "100vh",
      }}
    >

      <ScrollToTop />

      <Header />

      <Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/services"
    element={<ServicesPage />}
  />

  <Route
    path="/leadership"
    element={<LeadershipPage />}
  />

  <Route
    path="/academy"
    element={<AcademyPage />}
  />

  <Route
    path="/careers"
    element={<CareersPage />}
  />

  <Route
    path="/contact"
    element={<ContactPage />}
  />

  <Route
    path="/request-quote"
    element={<RequestQuotePage />}
  />

<Route
  path="/management"
  element={<ManagementPage />}
/>

</Routes>



      <Footer />
    </Box>
  );
}