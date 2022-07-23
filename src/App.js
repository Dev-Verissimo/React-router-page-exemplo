import Menu from "./components/Menu";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TeamSection from "./components/TeamSection";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
      <Menu />
        <Routes>
        <Route path="/" element={ <Banner />}></Route>
          <Route path="/features" element={<FeaturesSection />}></Route>
          <Route element={<ServicesSection />} path="/services"></Route>
          <Route element={<PortfolioSection />} path="/portfolio"></Route>
          <Route element={<TestimonialsSection />} path="/testimonials"></Route>
          <Route element={<TeamSection />} path="/team"></Route>
        </Routes>
      </BrowserRouter>
  );
}
