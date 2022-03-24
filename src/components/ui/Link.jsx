import { Link as GatsbyLink } from "gatsby";

export default function Link({ to, children, ...props }) {
  return (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  );
}
