import Slider from "../components/Slider";
import Find from "../components/Find";
import About from "./About";
import House from "./House";
import Price from "./Price";
import DealWhyChooseCustomer from "../components/DealWhyChooseCustomer";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Slider />
      <Find />
      <About />
      <House />
      <Price />
      <DealWhyChooseCustomer />
      <Contact />
    </>
  );
}
export default Home;
