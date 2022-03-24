import { Helmet } from "react-helmet";

// Layout components
import { Navbar } from "locales/de/Navbar";
import { Footer } from "locales/de/Footer";
import SkipNavLinks from "components/layout/SkipNavLinks";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="de" />
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
