import { Helmet } from "react-helmet";

// Layout components
import { Navbar } from "locales/cs/Navbar";
import { Footer } from "locales/cs/Footer";
import SkipNavLinks from "components/layout/SkipNavLinks";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="cs" />
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
