import PropTypes from "prop-types";

// Configs
import socialLinks from "settings/socialLinks";

// Icons
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function SocialMedia({ className }) {
  return (
    <div className={`social-icons flex space-x-5 no-underline ${className}`}>
      <a
        href={socialLinks.instagram.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.instagram.ariaLabel}
        className="flex text-rich font-medium uppercase tracking-wider text-base p-2 hover:opacity-70 transition-opacity duration-default"
      >
        <BsInstagram aria-label="instagram" className="mr-2" />
        <span>Instagram</span>
      </a>
      <a
        href={socialLinks.facebook.link}
        target="blank"
        rel="noreferrer me external"
        aria-label={socialLinks.facebook.ariaLabel}
        className="flex text-rich font-medium uppercase tracking-wider text-base p-2 hover:opacity-70 transition-opacity duration-default"
      >
        <BsFacebook aria-label="facebook" className="mr-2" />
        <span>Facebook</span>
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string,
};
