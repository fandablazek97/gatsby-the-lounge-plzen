import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Link from "components/ui/Link";

// Icons
import { HiChevronDown } from "react-icons/hi";

const langs = [
  { id: 1, label: "Čeština", link: "/" },
  { id: 2, label: "English", link: "/en/" },
  { id: 3, label: "Deutch", link: "/de/" },
  { id: 4, label: "русский", link: "/ru/" },
];

export default function LanguageSwitcherMobile() {
  const [selected, setSelected] = useState(langs[0]);

  return (
    <div className="relative lg:hidden">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="focus-visible:a11y-white flex !outline-none transition-opacity duration-150 hover:opacity-70 ">
          <span className="text-xs font-semibold uppercase tracking-wider text-rich xs:text-sm">
            {selected.label}
          </span>
          <HiChevronDown className="ml-1 scale-130 text-base text-white xs:ml-2 xs:text-lg" />
        </Listbox.Button>
        <Listbox.Options className="focus-visible:a11y-white absolute left-0 top-8 flex w-36 flex-col items-center justify-between space-y-5 rounded-md bg-body bg-opacity-80 p-5 !outline-none backdrop-blur-lg">
          {langs.map((lang) => (
            <Listbox.Option
              key={lang.id}
              value={lang.label}
              className="focus-visible:a11y-white cursor-pointer text-xs font-semibold uppercase tracking-wider text-rich !outline-none transition-opacity  duration-150 hover:opacity-70 xs:text-sm"
            >
              <Link to={lang.link} className="min-w-fit whitespace-nowrap">
                {lang.label}
              </Link>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
