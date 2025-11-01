import Hero from "@/components/Hero";
import About from "@/components/About";
import Episodes from "@/components/Episodes";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Episodes />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Index;
