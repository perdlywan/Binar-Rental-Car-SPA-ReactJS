import Banner from "../../shared/banner";
import Footer from "../../shared/footer";
import OurServices from "./our-services";
import WhyUs from "./why-us";
import Testimonial from "./testimonial";
import CtaBanner from "./cta-banner";
import Faq from "./faq";

const AllCar = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CtaBanner />
      <Faq />
      <Footer />
    </div>
  );
};

export default AllCar;
