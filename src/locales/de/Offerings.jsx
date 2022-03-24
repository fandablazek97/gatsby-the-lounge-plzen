import { StaticImage } from "gatsby-plugin-image";

// Ui
import Badge from "components/ui/Badge";

// Scroll reveal animations
import { SlideUp } from "components/scroll-reveal-animations";

export default function Offerings() {
  return (
    <section id="nabidka" className="relative z-1 mt-16">
      {/* Vodní dýmky */}
      <div className="flex flex-col md:flex-row-reverse">
        <div className="basis-1/2 bg-body-200 px-[5vw] py-32 lg:py-56 xl:pr-[8vw]">
          <SlideUp as="h2" className="ui-heading" data-heading="lg">
            Wasserpfeifen mit schwarzem und hellem Tabak
          </SlideUp>
          <SlideUp as="p" className="reveal-delay-200 mt-6">
            Premium-Tabake von Darkside, Element, Tanger. Sie haben viele
            Geschmacksrichtungen zur Auswahl.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Leichter Tabak</Badge>
            <Badge>Schwarzer Tabak</Badge>
          </SlideUp>
        </div>
        <StaticImage
          src="../../assets/images/the-lounge-18.jpg"
          alt="The lounge interiér"
          placeholder="blurred"
          formats={["avif", "webp", "jpg"]}
          width={3000}
          height={2000}
          loading="lazy"
          className="basis-1/2"
        />
      </div>

      {/* Alkohol */}
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2 px-[5vw] py-32 lg:py-56 xl:pl-[8vw]">
          <SlideUp as="h2" className="ui-heading" data-heading="lg">
            Premium-Sorten von Alkohol und Weinen
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Von billiger bis teurer Rum, Whiskey, Gin, Wodka und andere
            Spirituosen aller Art. Dazu gibt es südafrikanische Premiumweine der
            Marke Phant.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Erstklassiger Alkohol</Badge>
            <Badge>Qualitätsweine</Badge>
          </SlideUp>
        </div>
        <StaticImage
          src="../../assets/images/IMG_2441.jpg"
          alt="The lounge interiér"
          placeholder="blurred"
          formats={["avif", "webp", "jpg"]}
          width={3000}
          height={2000}
          loading="lazy"
          className="basis-1/2"
        />
      </div>

      {/* Nealko */}
      <div className="flex flex-col md:flex-row-reverse">
        <div className="basis-1/2 bg-body-200 px-[5vw] py-32 lg:py-56 xl:pr-[8vw]">
          <SlideUp as="h2" className="ui-heading" data-heading="lg">
            Cocktails und hausgemachte Limonaden
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Auswahl aus über 30 der besten Cocktails, Variationsmöglichkeit.
            Hochwertige, dicke hausgemachte Limonaden, die Sie sonst nirgendwo
            bekommen.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Hausgemachte Limonaden</Badge>
            <Badge>Cocktails</Badge>
          </SlideUp>
        </div>
        <StaticImage
          src="../../assets/images/the_lounge_srpen-40.jpg"
          alt="The lounge interiér"
          placeholder="blurred"
          formats={["avif", "webp", "jpg"]}
          width={3000}
          height={2000}
          loading="lazy"
          className="basis-1/2"
        />
      </div>
    </section>
  );
}
