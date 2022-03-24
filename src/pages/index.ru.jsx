// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/ru/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/ru/HeroSection";
import AboutUs from "locales/ru/AboutUs";
import Offerings from "locales/ru/Offerings";
import OpeningHours from "locales/ru/OpeningHours";
import Contact from "locales/ru/Contact";
import Follow from "locales/ru/Follow";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Шиша и коктейль-бар в Пльзень"
          description="The Lounge - кальян-бар, где можно выбрать из богатого ассортимента кальянов и напитков. Вы найдете нас в историческом центре города Пльзень, всего в нескольких шагах от площади Республики."
          keywords="кальян-бар, кальян-бар Пльзень, бар Пльзень, лаунж Пльзень, кальян Пльзень"
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
