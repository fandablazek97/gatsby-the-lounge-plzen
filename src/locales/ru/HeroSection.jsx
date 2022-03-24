import { StaticImage } from "gatsby-plugin-image";
// import AnchorLink from "components/ui/AnchorLink";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Icons
import { HiLocationMarker, HiArrowDown } from "react-icons/hi";

// Components
// import HeroSectionSlider from "./HeroSectionSlider";

// Assets
import Pattern from "assets/svg/pattern.svg";

export default function HeroSection() {
  return (
    <header
      id="top"
      className="flex h-screen min-h-[512px] w-screen flex-col-reverse justify-between sm:min-h-[640px] lg:flex-row"
    >
      <div className="relative flex basis-3/5 flex-col justify-center">
        {/* pattern */}
        <img
          src={Pattern}
          alt="pattern"
          width="400"
          height="700"
          className="pointer-events-none absolute hidden translate-y-[30%] -translate-x-3/4 lg:block"
        />

        {/* content */}
        <div className="ml-[5vw] mb-40 lg:ml-[8vw] lg:mb-0">
          <a
            href="https://www.google.com/maps/place/THE+LOUNGE/@49.746392,13.3748784,17z/data=!3m1!4b1!4m5!3m4!1s0x470af169399be1a5:0x715ba80afaa19dc6!8m2!3d49.7463886!4d13.3770671"
            target="_blank"
            rel="noreferrer"
            className="ui-link mb-5 flex text-lg"
            data-link="4"
          >
            <HiLocationMarker className="mr-2" />
            <span className="font-serif">
              Náměstí Republiky 136/22, 301 00 Plzeň 3
            </span>
          </a>
          <h1 className="ui-heading text-5xl uppercase text-primary md:text-7xl xl:text-8xl">
            The Lounge <br /> Pilsen
          </h1>
        </div>
        <AnchorLink
          to="/ru/#o-nas"
          title="прокрутить вниз"
          className="absolute bottom-14 left-[5vw] flex text-white opacity-60 transition-opacity duration-default hover:opacity-100 lg:left-[8vw]"
        >
          <HiArrowDown className="mr-2" />
          <span className="text-sm font-medium uppercase">прокрутить вниз</span>
        </AnchorLink>
      </div>
      {/* <HeroSectionSlider /> */}
      <StaticImage
        src="../../assets/images/IMG_8036.jpg"
        alt="The lounge interiér"
        placeholder="blurred"
        formats={["avif", "webp", "jpg"]}
        width={3000}
        height={2000}
        loading="eager"
        className="z-1 basis-2/5 opacity-75"
      />
    </header>
  );
}
