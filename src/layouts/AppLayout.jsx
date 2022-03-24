// Aplication main CSS
import "../styles/App.css";

// Font imports
import "@fontsource/playfair-display/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

// Layout components
import { Head } from "components/layout/Head";

export default function AppLayout({ children }) {
  return (
    <>
      <Head />
      {children}
    </>
  );
}
