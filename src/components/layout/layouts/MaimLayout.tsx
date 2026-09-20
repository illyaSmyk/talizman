import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguageSync from "../../i18n/LanguageSync";

function MainLayout() {
  return (
    <>
      <LanguageSync />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
