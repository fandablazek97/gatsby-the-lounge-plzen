import { forwardRef } from "react";
import PropTypes from "prop-types";

// Loading icon
import { CgSpinner } from "react-icons/cg";

const Button = forwardRef(
  (
    {
      as: Component,
      children,
      size,
      color,
      shape,
      IconLeft,
      IconRight,
      isLoading,
      isDisabled,
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    // Size classes
    const sizeClasses = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    };

    // Color classes
    const colorClasses = {
      primary:
        "bg-transparent text-primary focus:a11y-primary border-2 border-primary hover:text-white hover:bg-primary",
    };

    // Shape classes
    const shapeClasses = {
      square: "rounded-none",
      default: "rounded-none",
      rounded: "rounded-md",
      pill: "rounded-full",
    };
    return (
      <Component
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
        className={`group relative z-0 inline-flex items-center
        justify-center overflow-hidden px-[1.5em] py-[1.25em] font-sans
        font-semibold
        uppercase leading-none
        tracking-widest transition duration-default 
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${shapeClasses[shape]}
        ${
          isLoading
            ? "pointer-events-none cursor-not-allowed"
            : "cursor-pointer"
        } ${isDisabled ? "pointer-events-none opacity-50 grayscale" : ""} 
        ${className}
        `}
        {...rest}
      >
        {/* Left icon */}
        {IconLeft !== null && (
          <span
            className={`z-1 mr-3 scale-130 ${isLoading ? "invisible" : ""}`}
          >
            {IconLeft}
          </span>
        )}

        {/* Button text */}
        <span className={`z-1 ${isLoading ? "invisible" : ""}`}>
          {children}
        </span>

        {/* Right icon */}
        {IconRight !== null && (
          <span
            className={`z-1 ml-3 scale-130 ${isLoading ? "invisible" : ""}`}
          >
            {IconRight}
          </span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <CgSpinner className="absolute inset-0 z-1 m-auto h-[2em] w-[2em] animate-spin-fast" />
        )}
      </Component>
    );
  }
);

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

Button.defaultProps = {
  as: "a",
  children: "This is button",
  size: "md",
  color: "primary",
  shape: "default",
  IconLeft: null,
  IconRight: null,
  isLoading: false,
  isDisabled: false,
  className: "",
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  color: PropTypes.string,
  shape: PropTypes.oneOf(["square", "default", "rounded", "pill"]),
  IconLeft: PropTypes.element,
  IconRight: PropTypes.element,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
