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
            <span className="text-primary">Vodní dýmky</span> s černým i světlým
            tabákem
          </SlideUp>
          <SlideUp as="p" className="reveal-delay-200 mt-6">
            Prémiové tabáky značky Darkside, Element, Tangiers. Na výběr máte z
            mnoha příchutí.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Světlý tabák</Badge>
            <Badge>Černý tabák</Badge>
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
            <span className="text-primary">Prémiové</span> druhy alkoholu a vín
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Od levnějších po dražší rumy, whiskey, giny, vodky a další destiláty
            všeho druhu. Nechybí ani prémiová jihoafrická vína značky Phant.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Prémiový alkohol</Badge>
            <Badge>Kvalitní vína</Badge>
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
            <span className="text-primary">Koktejly</span> a domácí limonády
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Výběr z více než 30ti těch nejlepších koktejlů, možnost variace.
            Kvalitní domácí limonády, které jinde nedostanete.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Domácí limonády</Badge>
            <Badge>Koktejly</Badge>
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
