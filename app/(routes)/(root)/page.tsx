import Categories from "./_components/Categories";
import CTA from "./_components/CTA";
import HeroSection from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Achievement from "./_components/Achievement";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* TODO : ADD Course Section */}
      <Achievement />
      <Categories />
      <CTA />
    </div>
  );
};

export default Home;
