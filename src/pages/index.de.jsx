// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/de/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/de/HeroSection";
import AboutUs from "locales/de/AboutUs";
import Offerings from "locales/de/Offerings";
import OpeningHours from "locales/de/OpeningHours";
import Contact from "locales/de/Contact";
import Follow from "locales/de/Follow";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Shisha- und Cocktailbar in Pilsen"
          description="The Lounge - Shisha-Bar, in der Sie aus einer reichen Auswahl an Wasserpfeifen und Getränken wählen können. Sie finden uns im historischen Zentrum von Pilsen, nur wenige Schritte vom Platz der Republik entfernt."
          keywords="Shisha-Bar, Shisha-Bar Plzen, Bar Plzen, Lounge Plzen, Wasserpfeife Plzen"
        />

        <HeroSection />

        <AboutUs />

        <Offerings />

        <OpeningHours />

        <Contact />

        <Follow />
      </LangLayout>
    </AppLayout>
  );
}
