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
          Испытайте незабываемые моменты в кальян-баре The Lounge, который
          покорит вас не только своим интерьером, но и богатым выбором кальянов
          и напитков. Вы найдете нас в историческом центре города Пльзень, всего
          в нескольких шагах от площади Республики (náměstí Republiky).
        </SlideUp>

        <div className="mx-auto mt-28 grid w-full max-w-xl grid-cols-6 gap-6 md:gap-12 lg:mt-36 xl:gap-16">
          <SlideUp
            as="div"
            className="col-span-6 flex flex-col items-center sm:col-span-2"
          >
            <HiWifi className="text-3xl sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Бесплатный вай-фай
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-200 col-span-3 flex flex-col items-center sm:col-span-2"
          >
            <HiCreditCard className="text-3xl sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Карточные платежи
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 col-span-3 flex flex-col items-center sm:col-span-2"
          >
            <HiCash className="text-3xl sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Оплата наличными
            </span>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
