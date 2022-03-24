// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/en/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/en/HeroSection";
import AboutUs from "locales/en/AboutUs";
import Offerings from "locales/en/Offerings";
import OpeningHours from "locales/en/OpeningHours";
import Contact from "locales/en/Contact";
import Follow from "locales/en/Follow";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Shisha & Cocktail bar in Pilsen"
          description="he Lounge - shisha bar, where you can choose from a rich selection of hookahs and drinks. You can find us in the historical center of Pilsen, just a few steps from náměstí Republiky."
          keywords="shisha bar, shisha bar Plzen, bar Plzen, lounge plzen, shisha pilsen, sisha bar pilsen, hookah pilsen"
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
