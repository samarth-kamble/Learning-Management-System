import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
