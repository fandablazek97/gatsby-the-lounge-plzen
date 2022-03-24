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
            Кальяны с черным и светлым табаком
          </SlideUp>
          <SlideUp as="p" className="reveal-delay-200 mt-6">
            Премиум табаки Darkside, Element, Tangiers. Вы можете выбрать из
            множества вкусов.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Легкий табак</Badge>
            <Badge>Черный табак</Badge>
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
            Качественные виды алкоголя и вин
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            От более дешевых до более дорогих ромов, виски, джинов, водки и
            других спиртных напитков всех видов. Также есть элитные
            южноафриканские вина марки Phant.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Премиум алкоголь</Badge>
            <Badge>Качественные вина</Badge>
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
            Коктейли и домашние лимонады
          </SlideUp>
          <SlideUp className="reveal-delay-200 mt-6">
            Выбор более 30 лучших коктейлей, возможность вариации. Качественные
            домашние лимонады, которые больше нигде не купишь.
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28"
          >
            <Badge>Домашние лимонады</Badge>
            <Badge>Коктейли</Badge>
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
