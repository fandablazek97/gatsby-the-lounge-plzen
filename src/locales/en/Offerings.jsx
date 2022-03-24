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
            <span className="text-primary">Hookahs</span> with black and light
            tobacco
          </SlideUp>
          <SlideUp as="p" className="reveal-delay-200 mt-6">
            Premium tobaccos - Darkside, Element, Tangiers. You have many
            flavors to choose from.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Light tobacco</Badge>
            <Badge>Black tobacco</Badge>
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
            <span className="text-primary">Premium</span> alcohol and wines
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Cheaper or premium rums, whiskeys, gins, vodkas and other spirits of
            all kinds. There is also premium South African wines of the Phant
            brand.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Premium alcohol</Badge>
            <Badge>Quality wines</Badge>
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
            <span className="text-primary">Cocktails</span> and homemade
            lemonades
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Selection of more than 30 of the best cocktails, the possibility of
            variation. Quality homemade lemonades that you won't get anywhere
            else.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Homemade lemonades</Badge>
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
