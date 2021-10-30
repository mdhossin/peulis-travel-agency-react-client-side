import React from "react";
import Footer from "../../Footer/Footer";

import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Info from "../Info/Info";
import Services from "../Services/Services";
import WhyPeulis from "../WhyPeulis/WhyPeulis";

const Home = () => {
  return (
    <div>
      <Banner />

      <Services />
      <Info></Info>
      <WhyPeulis></WhyPeulis>
      <Blogs />
      <Footer></Footer>
    </div>
  );
};

export default Home;
