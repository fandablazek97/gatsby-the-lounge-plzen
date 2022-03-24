import PropTypes from "prop-types";

// Configs
import socialLinks from "settings/socialLinks";

// Icons
// import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiInstagramLine, RiFacebookFill } from "react-icons/ri";
// import {FaFacebookF, FaInstagram} from "react-icons/fa";

export default function SocialMedia({ className }) {
  return (
    <div className={`social-icons flex space-x-5 no-underline ${className}`}>
      <a
        href={socialLinks.instagram.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.instagram.ariaLabel}
        className="flex p-2 text-base font-medium uppercase tracking-wider text-rich transition-opacity duration-default hover:opacity-70"
      >
        <RiInstagramLine
          aria-label="instagram"
          className="mr-2 block text-base"
        />
        <span className="block">Instagram</span>
      </a>
      <a
        href={socialLinks.facebook.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.facebook.ariaLabel}
        className="flex p-2 text-base font-medium uppercase tracking-wider text-rich transition-opacity duration-default hover:opacity-70"
      >
        <RiFacebookFill
          aria-label="facebook"
          className="mr-2 block scale-115 text-base"
        />
        <span className="block">Facebook</span>
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string,
};
