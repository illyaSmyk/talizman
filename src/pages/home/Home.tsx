import Header from "../../components/layout/Header/Header";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import WhyTalizman from "../../components/sections/WhyTalizman/WhyTalizman";
import Experience from "../../components/sections/Experience/Experience";
import Footer from "../../components/sections/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyTalizman />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default Home;
