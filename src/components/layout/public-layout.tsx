import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
