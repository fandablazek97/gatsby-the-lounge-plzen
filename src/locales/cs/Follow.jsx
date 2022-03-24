import { FaFacebookF, FaInstagram } from "react-icons/fa";

// Configs
import socialLinks from "settings/socialLinks";

// Scroll reveal animations
import { SlideUp } from "components/scroll-reveal-animations";

// Assets
import Pattern from "assets/svg/pattern.svg";

export default function Follow() {
  return (
    <section className="relative my-24 md:my-36 lg:my-48">
      {/* pattern */}
      <img
        src={Pattern}
        alt="pattern"
        width="400"
        height="700"
        className="pointer-events-none absolute left-0 top-0 hidden -translate-x-2/3 -translate-y-1/2 rotate-90 lg:block xl:-translate-x-1/2"
      />
      <div className="ui-wrapper" data-wrapper="sm">
        <SlideUp
          as="h2"
          className="ui-heading mx-auto text-center"
          data-heading="lg"
        >
          Sledujte nás
        </SlideUp>
        <div className="my-20 mx-auto max-w-fit divide-y-1 divide-gray-700 md:grid md:max-w-none md:grid-cols-2 md:divide-y-0 md:divide-x-1">
          <SlideUp
            as="div"
            className="reveal-delay-300 flex items-center justify-center pb-10 md:flex-col md:pb-0"
          >
            <FaInstagram className="mr-3 text-3xl text-white md:col-span-1 md:mr-0 md:mb-8 md:text-5xl" />
            <a
              href={socialLinks.instagram.link}
              target="_blank"
              rel="noreferrer me external"
              aria-label={socialLinks.instagram.ariaLabel}
              className="ui-link text-2xl font-semibold text-primary md:text-3xl"
              data-link="4"
            >
              @the__lounge__
            </a>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-600 flex items-center justify-center pt-10 md:flex-col md:pt-0"
          >
            <FaFacebookF className="mr-3 text-3xl text-white md:col-span-1 md:mr-0 md:mb-8 md:text-5xl" />
            <a
              href={socialLinks.facebook.link}
              target="_blank"
              rel="noreferrer me external"
              aria-label={socialLinks.facebook.ariaLabel}
              className="ui-link text-2xl font-semibold text-primary md:text-3xl"
              data-link="4"
            >
              @theloungeplzen
            </a>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
