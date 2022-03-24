import { SlideUp } from "components/scroll-reveal-animations";

// Assets
import Pattern from "assets/svg/pattern.svg";

export default function OpeningHours() {
  return (
    <section id="oteviraci-doba" className="relative py-24 md:py-36 lg:py-48">
      {/* pattern */}
      <img
        src={Pattern}
        alt="pattern"
        width="500"
        height="800"
        className="pointer-events-none absolute right-0 hidden translate-x-[96%] rotate-90 lg:block xl:translate-x-3/4 2xl:translate-x-1/2"
      />
      {/* pattern */}
      <img
        src={Pattern}
        alt="pattern"
        width="400"
        height="700"
        className="pointer-events-none absolute left-0 top-0 hidden -translate-x-1/2 lg:block xl:-translate-x-1/3"
      />
      <div className="ui-wrapper" data-wrapper="sm">
        <SlideUp
          as="h2"
          className="ui-heading mx-auto text-center"
          data-heading="lg"
        >
          Öffnungszeiten
        </SlideUp>
        <div className="mx-auto mt-10 max-w-xl divide-y-1 divide-gray-700">
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg font-normal"
          >
            <span className="block">Montag</span>
            <span className="block">14:00 - 23:00</span>
          </SlideUp>
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg  font-normal"
          >
            <span className="block">Dienstag</span>
            <span className="block">14:00 - 23:00</span>
          </SlideUp>
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg  font-normal"
          >
            <span className="block">Mittwoch</span>
            <span className="block">14:00 - 23:00</span>
          </SlideUp>
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg  font-normal"
          >
            <span className="block">Donnerstag</span>
            <span className="block">14:00 - 23:00</span>
          </SlideUp>
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg  font-normal"
          >
            <span className="block">Freitag</span>
            <span className="block">14:00 - 01:00</span>
          </SlideUp>
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg  font-normal"
          >
            <span className="block">Samstag</span>
            <span className="block">14:00 - 01:00</span>
          </SlideUp>
          <SlideUp
            as="div"
            className="flex justify-between py-6 font-serif text-lg  font-normal"
          >
            <span className="block">Sonntag</span>
            <span className="block">14:00 - 22:00</span>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
