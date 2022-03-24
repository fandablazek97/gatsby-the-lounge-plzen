// Components
// import AnchorLink from "components/ui/AnchorLink";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Icons
import { HiArrowUp } from "react-icons/hi";

// Tightly coupled components
import FooterRevealMark from "./FooterRevealMark";
import FooterInfoModal from "./FooterInfoModal";

export default function Footer() {
  return (
    <footer className="w-screen">
      <div
        className="ui-wrapper relative py-10 text-white lg:flex lg:justify-between lg:py-16"
        data-wrapper="lg"
      >
        {/* scroll up arrow */}
        <AnchorLink
          to="/#top"
          className="ui-link data-link-3 absolute top-10 left-1/2 flex -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:hidden xl:flex"
        >
          <HiArrowUp className="mr-2 text-base" />
          <span className="text-xs font-medium uppercase">Posunout nahoru</span>
        </AnchorLink>

        <div className="mt-16 lg:mt-0 lg:flex lg:items-center lg:space-x-5 xl:space-x-10">
          <span className="block text-center text-xs font-medium uppercase text-gray-600 lg:text-white">
            © {new Date().getFullYear()} The Lounge
          </span>
          <span className="block text-center text-xs font-medium uppercase text-gray-600 lg:text-white">
            Všechna práva vyhrazena
          </span>{" "}
        </div>
        <div className="mt-6 flex flex-col items-center justify-center lg:mt-0 lg:flex-row lg:justify-end lg:space-x-5 xl:space-x-10">
          <FooterInfoModal className="ui-link data-link-3 block text-center text-xs font-medium uppercase text-gray-600 lg:text-white">
            Informace o provozovateli
          </FooterInfoModal>
          <FooterRevealMark className="mt-6 lg:mt-0" />
        </div>
      </div>
    </footer>
  );
}
