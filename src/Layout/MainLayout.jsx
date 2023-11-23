import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
          <Outlet />
          <Footer/>
    </div>
  );
};

export default MainLayout;
