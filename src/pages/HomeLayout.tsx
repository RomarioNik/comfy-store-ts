import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
};
