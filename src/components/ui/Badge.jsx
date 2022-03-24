import PropTypes from "prop-types";

export default function Badge({
  as: Component,
  children,
  size,
  color,
  className,
  ...rest
}) {
  return (
    <Component
      className={`py-2 px-2.5 inline-flex items-center justify-center bg-opacity-15 
      uppercase font-sans font-semibold leading-none tracking-widest
      text-base border-2 text-primary border-primary 
      ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
}

Badge.defaultProps = {
  as: "span",
  children: "Badge",
  className: "",
};

Badge.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
