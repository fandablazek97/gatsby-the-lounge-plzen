export default function SkipNavLinks() {
  return (
    <a
      href="#start"
      className="focus-visible:a11y-primary fixed top-0 left-[5%] z-[120] hidden
      translate-y-[-120%] transform-gpu bg-primary
      px-4 pt-1.5 pb-1 font-semibold text-white opacity-0 
      transition duration-default focus-visible:translate-y-0
      focus-visible:opacity-100 lg:block"
    >
      Skip navigation
    </a>
  );
}
