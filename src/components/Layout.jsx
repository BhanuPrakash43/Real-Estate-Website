import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
