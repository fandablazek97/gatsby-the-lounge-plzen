import { HiWifi, HiCreditCard, HiCash } from "react-icons/hi";

// Scroll reveal animations
import { SlideUp } from "components/scroll-reveal-animations";

// Assets
import Pattern from "assets/svg/pattern.svg";

export default function AboutUs() {
  return (
    <section id="o-nas" className="relative py-24 md:py-36 lg:py-48">
      {/* pattern */}
      <img
        src={Pattern}
        alt="pattern"
        width="400"
        height="700"
        className="pointer-events-none absolute right-0 hidden translate-x-1/2 lg:block xl:translate-x-1/3 2xl:translate-x-0"
      />
      <div className="ui-wrapper" data-wrapper="sm">
        <SlideUp
          as="p"
          className="text-center font-serif text-xl font-thin !leading-[1.8] md:text-2xl"
        >
          Experience unforgettable moments in the shisha bar The Lounge, which
          will interest you with interior as well as a rich selection of hookahs
          and drinks. You can find us in the historical center of Pilsen, just a
          few steps from Republica square (náměstí Republiky).
        </SlideUp>

        <div className="mx-auto mt-28 grid w-full max-w-xl grid-cols-6 gap-6 md:gap-12 lg:mt-36 xl:gap-16">
          <SlideUp
            as="div"
            className="col-span-6 flex flex-col items-center sm:col-span-2"
          >
            <HiWifi className="text-3xl sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Free wifi
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-200 col-span-3 flex flex-col items-center sm:col-span-2"
          >
            <HiCreditCard className="text-3xl sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Payments by card
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 col-span-3 flex flex-col items-center sm:col-span-2"
          >
            <HiCash className="text-3xl sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Payments in cash
            </span>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
