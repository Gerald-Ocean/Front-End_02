import Footer from "@/components/core/footer";
import Navbar from "@/components/core/navbar";
import * as React from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
