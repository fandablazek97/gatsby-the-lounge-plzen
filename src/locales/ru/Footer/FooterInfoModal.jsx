import { useState, Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";

// Icon
import { MdClose } from "react-icons/md";

export default function FooterInfoModal({ className, children }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeDialog() {
    setIsOpen(false);
  }

  function openDialog() {
    setIsOpen(true);
  }
  return (
    <>
      {/* Tlačítko pro otevření */}
      <button
        as="button"
        type="button"
        onClick={openDialog}
        className={className}
      >
        {children}
      </button>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <HeadlessDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-[200] h-screen w-screen"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <HeadlessDialog.Overlay className="fixed inset-0 z-[200] h-screen w-screen bg-gray-950 bg-opacity-80 backdrop-blur-md" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition duration-400"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* Obsah modalu - container pro obrázek */}
            <div className="relative top-1/2 bottom-1/2 z-[200] mx-auto w-[90%] max-w-xl -translate-y-1/2 transform rounded-lg bg-gray-800 p-6 text-white lg:p-10">
              <p>
                One Three Four Company s.r.o. <br />
                Palackého náměstí 618/24, Plzeń, 30100 <br />
                IČO: 07522118
              </p>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Tlačítko pro zavření (křížek) */}
            <button
              type="button"
              onClick={closeDialog}
              className="fixed top-6 right-6 z-[210] rounded-default bg-transparent p-2 text-4xl text-white transition-colors duration-default hover:bg-white hover:bg-opacity-15 focus:bg-white focus:bg-opacity-15"
            >
              <span className="sr-only">Zavřít</span>
              <MdClose />
            </button>
          </Transition.Child>
        </HeadlessDialog>
      </Transition>
    </>
  );
}
