import Navbar from "./(root)/_components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
