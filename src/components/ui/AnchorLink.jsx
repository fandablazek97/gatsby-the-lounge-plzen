import { AnchorLink as GatsbyAnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";

export default function AnchorLink({
  to,
  onClick,
  className = "",
  children,
  ...props
}) {
  return (
    <GatsbyAnchorLink
      to={to}
      title={children}
      stripHash
      onAnchorLinkClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </GatsbyAnchorLink>
  );
}

AnchorLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
