// Data
import { callToAction } from "settings/navLinks";

// Components
import Notification from "components/Notification";

// Scroll reveal animations
import { SlideUp } from "components/scroll-reveal-animations";

// Icons
import { HiPhone } from "react-icons/hi";
import { IoNavigate, IoCopySharp } from "react-icons/io5";

// Hooks
import useClipboard from "hooks/useClipboard";

export default function Contact() {
  const [isAdressCopied, setIsAdressCopied] = useClipboard(
    "Náměstí Republiky 136/22, 301 00 Plzeň 3",
    {
      successDuration: 2500,
    }
  );
  const [isPhoneCopied, setIsPhoneCopied] = useClipboard("+420 123 456 789", {
    successDuration: 2500,
  });
  return (
    <>
      <section
        id="kontakt"
        className="relative z-1 flex flex-col md:flex-row-reverse"
      >
        <div className="basis-1/2 bg-body-200 px-[5vw] py-32 lg:py-56 xl:pr-[8vw]">
          <SlideUp as="h2" className="ui-heading" data-heading="lg">
            Kontaktujte nás
          </SlideUp>
          <div className="divide-y-1 divide-gray-700">
            {/* Adresa */}
            <SlideUp
              as="div"
              className="reveal-delay-200 mt-16 flex items-center justify-between space-x-4 pb-8 md:mt-24"
            >
              <div>
                <h3 className="ui-heading" data-heading="sm">
                  Adresa
                </h3>
                <span className="font-serif text-lg font-light">
                  Náměstí Republiky 136/22, 301 00 Plzeň 3
                </span>
              </div>
              <div className="flex space-x-3 xs:space-x-4">
                <a
                  href="https://www.google.com/maps/place/THE+LOUNGE/@49.746392,13.3748784,17z/data=!3m1!4b1!4m5!3m4!1s0x470af169399be1a5:0x715ba80afaa19dc6!8m2!3d49.7463886!4d13.3770671"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-xl text-white transition-colors duration-default hover:bg-white hover:text-gray-800 focus:bg-white focus:text-gray-800 xs:h-14 xs:w-14 xs:text-2xl"
                >
                  <IoNavigate />
                </a>
                <button
                  onClick={setIsAdressCopied}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-xl text-white transition-colors duration-default hover:bg-white hover:text-gray-800 focus:bg-white focus:text-gray-800 xs:h-14 xs:w-14 xs:text-2xl"
                >
                  <IoCopySharp />
                </button>
              </div>
            </SlideUp>

            {/* Telefon / rezervace */}
            <SlideUp
              as="div"
              className="reveal-delay-400 flex items-center justify-between space-x-4 pt-8"
            >
              <div>
                <h3 className="ui-heading" data-heading="sm">
                  Telefon / rezervace
                </h3>
                <span className="font-serif text-lg font-light">
                  {callToAction[0].label}
                </span>
              </div>
              <div className="flex space-x-3 xs:space-x-4">
                <a
                  href={callToAction[0].link}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-xl text-white transition-colors duration-default hover:bg-white hover:text-gray-800 focus:bg-white focus:text-gray-800 xs:h-14 xs:w-14 xs:text-2xl"
                >
                  <HiPhone />
                </a>
                <button
                  onClick={setIsPhoneCopied}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-xl text-white transition-colors duration-default hover:bg-white hover:text-gray-800 focus:bg-white focus:text-gray-800 xs:h-14 xs:w-14 xs:text-2xl"
                >
                  <IoCopySharp />
                </button>
              </div>
            </SlideUp>
          </div>
        </div>
        <iframe
          title="The lounge adresa"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=N%C3%A1m%C4%9Bst%C3%AD%20Republiky%20136/22,%20301%2000%20Plze%C5%88%203+(The%20Lounge)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="min-h-[400px] basis-1/2"
          loading="lazy"
        ></iframe>
      </section>
      <Notification isShown={isAdressCopied || isPhoneCopied}>
        Zkopírováno do schránky
      </Notification>
    </>
  );
}
