import { Helmet } from "react-helmet";

// Layout components
import { Navbar } from "locales/ru/Navbar";
import { Footer } from "locales/ru/Footer";
import SkipNavLinks from "components/layout/SkipNavLinks";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="ru" />
      </Helmet>
      <header>
        <SkipNavLinks />
        <Navbar />
      </header>
      <main id="start">{children}</main>
      <Footer />
    </>
  );
}
