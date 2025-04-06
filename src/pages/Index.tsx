
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-nunito">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <ToTop />
    </div>
  );
};

export default Index;
