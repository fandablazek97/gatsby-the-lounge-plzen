// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/cs/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/cs/HeroSection";
import AboutUs from "locales/cs/AboutUs";
import Offerings from "locales/cs/Offerings";
import OpeningHours from "locales/cs/OpeningHours";
import Contact from "locales/cs/Contact";
import Follow from "locales/cs/Follow";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Shisha & Cocktail bar v Plzni"
          description="The Lounge - shisha bar, kde si vyberete z bohaté nabídky vodních dýmek a nápojů. Najdete nás historickém centru Plzně jen pár kroků od náměstí Republiky."
          keywords="shisha bar, shisha bar Plzen, bar Plzen, lounge plzen, vodni dymka plzen"
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
