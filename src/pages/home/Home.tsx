import { useTranslation } from "react-i18next";
import SEO from "../../components/layout/SEO/SEO";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Services from "../../components/sections/Services/Services";
import WhyTalizman from "../../components/sections/WhyTalizman/WhyTalizman";
import Experience from "../../components/sections/Experience/Experience";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo.home.title")}
        description={t("seo.home.description")}
      />

      <Hero />
      <About />
      <Services />
      <WhyTalizman />
      <Experience />
    </>
  );
}

export default Home;
