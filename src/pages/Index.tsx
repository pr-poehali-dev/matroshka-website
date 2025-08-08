import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MasterClassSection from "@/components/MasterClassSection";
import GallerySection from "@/components/GallerySection";
import CatalogSection from "@/components/CatalogSection";
import MatroShkaSection from "@/components/MatroShkaSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-russian-cream">
      <Header />
      <HeroSection />
      <MasterClassSection />
      <GallerySection />
      <CatalogSection />
      <MatroShkaSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;