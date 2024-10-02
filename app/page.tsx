import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimoniSection from "./components/TestimoniSection";

export default function Navbar() {
  return (
    <div className="bg-white">
      {/* Header */}

      <Header />

      {/* Hero Section */}

      <HeroSection />

      {/* Features Section */}

      <FeaturesSection />

      {/* Testimonial Section */}

      <TestimoniSection />

      {/* Footer */}

      <Footer />

    </div>
  );
}
