import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default RootLayout;
