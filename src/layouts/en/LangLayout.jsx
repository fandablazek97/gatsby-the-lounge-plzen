import { Helmet } from "react-helmet";

// Layout components
import { Navbar } from "locales/en/Navbar";
import { Footer } from "locales/en/Footer";
import SkipNavLinks from "components/layout/SkipNavLinks";

export default function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
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
