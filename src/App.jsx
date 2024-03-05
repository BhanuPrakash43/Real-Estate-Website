import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import House from "./pages/House";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/about" index element={<About />} />
      <Route path="/house" index element={<House />} />
      <Route path="/price" index element={<Price />} />
      <Route path="/contact" index element={<Contact />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/signup" index element={<Signup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
