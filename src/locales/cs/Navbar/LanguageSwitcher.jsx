import Link from "components/ui/Link";

export default function LanguageSwitcher({ className }) {
  return (
    <ul className={`hidden space-x-3 lg:flex lg:space-x-8 ${className}`}>
      <li className="text-xs font-semibold uppercase tracking-wider text-rich">
        <Link to="/" className="ui-link" data-link="3">
          Cs
        </Link>
      </li>
      <li className="text-xs font-semibold uppercase tracking-wider text-rich">
        <Link to="/en/" className="ui-link" data-link="3">
          En
        </Link>
      </li>
      <li className="text-xs font-semibold uppercase tracking-wider text-rich">
        <Link to="/de/" className="ui-link" data-link="3">
          De
        </Link>
      </li>
      <li className="text-xs font-semibold uppercase tracking-wider text-rich">
        <Link to="/ru/" className="ui-link" data-link="3">
          Ru
        </Link>
      </li>
    </ul>
  );
}
