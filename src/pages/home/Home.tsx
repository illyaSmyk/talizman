import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import WhyTalizman from "../../components/sections/WhyTalizman/WhyTalizman";
import Experience from "../../components/sections/Experience/Experience";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyTalizman />
      <Experience />
    </>
  );
}

export default Home;
