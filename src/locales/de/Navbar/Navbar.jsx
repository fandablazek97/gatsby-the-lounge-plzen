// BUG - při otevření menu a roztažení okna na velikost desktopu a větší
// zmizí křížek a navigace nejde zavřít -> v podstatě nemá vliv na reálnou funkčnost

import { useState, useEffect } from "react";

// Localized
import LanguageSwitcherMobile from "./LanguageSwitcherMobile";

// Links from global settings
import { mainRoutes, callToAction } from "settings/de/navLinks";

// Hooks & utils
import useScrollListener from "hooks/useScrollListener";
import { isBrowser } from "utils/isBrowser";

// Global components
import Link from "components/ui/Link";
import AnchorLink from "components/ui/AnchorLink";
import BrandLogo from "components/BrandLogo";
import SocialMedia from "components/SocialMedia";

// Tightly coupled components
import NavbarBurgerButton from "./NavbarBurgerButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Funkce pro otevírání / zavírání menu po kliknutí na burger menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isBrowser) {
      document.body.classList.toggle("helper-scroll-lock");
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
    if (isBrowser) {
      document.body.classList.remove("helper-scroll-lock");
    }
  }

  // use Scroll Listener hook
  const scroll = useScrollListener();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }

    // Skryje / ukáže navigaci na základě podmínky
    if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      aria-label="Hlavní navigace webu"
      className={`fixed z-100 w-screen transform-gpu transition-[background,transform,height,box-shadow] duration-400 ease-in-out ${
        isNavScrolled
          ? "h-20 bg-body bg-opacity-90 shadow-soft-xl backdrop-blur-lg dark:shadow-none"
          : "h-20 bg-gradient-to-b from-body md:h-32"
      } ${isNavVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    >
      {/* Vnitřní wrapper navigace - šířku menu upravit zde */}
      <div
        className="ui-wrapper relative flex h-full items-center justify-between"
        data-wrapper="lg"
      >
        <div className="flex items-center">
          {/* Desktop - Call to action */}
          <a
            href={callToAction[0].link}
            className="ui-link hidden text-xs font-medium uppercase tracking-widest text-primary xl:inline-flex"
            data-link="3"
          >
            {callToAction[0].label}
          </a>

          <span className="pointer-events-none mx-10 hidden font-semibold opacity-50 xl:block">
            /
          </span>

          {/* Language switcher */}
          <LanguageSwitcherMobile />
          <LanguageSwitcher />
        </div>

        {/* Logo navigace */}
        <Link
          to="/de/"
          onClick={closeMenu}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <BrandLogo />
        </Link>

        {/* Desktop - hlavní list s položkami menu */}
        <ul className="hidden list-none space-x-7 xl:flex 2xl:space-x-12">
          {mainRoutes.map((item) => (
            <li key={item.label}>
              <AnchorLink
                to={item.path}
                className="ui-link data-link-3 text-xs uppercase tracking-wider text-rich"
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        {/* Burger menu */}
        <NavbarBurgerButton
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu-list"
          aria-label="Otevřít / zavřít hlavní menu"
          className="z-10 xl:hidden"
          isActivated={isMenuOpen}
        />
      </div>

      {/* ------------------------- */}
      {/* Mobile - Full screen menu */}
      <div
        className={`fixed inset-0 block h-screen w-screen transform-gpu bg-body transition-visibility ease-out ${
          isMenuOpen
            ? "visible opacity-100 duration-400"
            : "invisible opacity-0 duration-150"
        }`}
      >
        {/* Vnitřní wrapper mobilního menu */}
        <div className="ui-wrapper flex h-full flex-col items-center justify-between pt-24 pb-44 xs:pt-28">
          {/* Mobile - Menu list s položkami */}
          <ul
            id="mobile-menu-list"
            className={`flex transform-gpu list-none flex-col items-center justify-start space-y-5 text-center transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-150 duration-500"
                : "-translate-y-12 opacity-0 delay-150 duration-0"
            }`}
          >
            {mainRoutes.map((item) => (
              <li key={item.label}>
                <AnchorLink
                  to={item.path}
                  onClick={closeMenu}
                  className="ui-link data-link-3 text-xl font-semibold uppercase text-rich"
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>

          {/* Mobile - Call to action list */}
          <ul
            className={`my-10 flex transform-gpu list-none flex-col items-center justify-start space-y-5 text-center transition ease-out xs:my-14 ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-300 duration-500"
                : "-translate-y-12 opacity-0 delay-150 duration-0"
            }`}
          >
            {/* Mobile - Call to action items */}
            {callToAction.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="ui-link text-2xl font-semibold normal-case text-primary"
                  data-link="4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile - Odkazy na sociální sítě */}
          <SocialMedia
            className={`mt-auto transform-gpu transition ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 delay-450 duration-500"
                : "-translate-y-12 opacity-0 delay-150 duration-0"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
