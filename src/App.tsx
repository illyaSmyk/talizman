import Home from "./pages/home/Home";
import Contact from "./pages/Contacts/Contact";
import Prices from "./pages/Prices/Prices";
import Gallery from "./pages/Gallery/Gallery";
import Privacy from "./pages/Privacy/Privacy";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/layouts/MaimLayout";

function PageRoutes({ prefix = "" }: { prefix?: string }) {
  return (
    <>
      <Route path={`${prefix}/prices`} element={<Prices />} />
      <Route path={`${prefix}/contact`} element={<Contact />} />
      <Route path={`${prefix}/gallery`} element={<Gallery />} />
      <Route path={`${prefix}/privacy`} element={<Privacy />} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<Home />} />
        <Route path="/ru" element={<Home />} />
        <Route path="/uk" element={<Home />} />

        {PageRoutes({})}
        {PageRoutes({ prefix: "/en" })}
        {PageRoutes({ prefix: "/ru" })}
        {PageRoutes({ prefix: "/uk" })}
      </Route>
    </Routes>
  );
}

export default App;
