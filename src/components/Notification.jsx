export default function Notification({ children, isShown }) {
  return (
    <div
      className={`fixed top-24 left-1/2 z-10 w-[90%] max-w-xl -translate-x-1/2 rounded-lg bg-white px-7 py-3 text-center font-medium text-gray-900 shadow-lg transition-all ${
        isShown
          ? "visible translate-y-0 opacity-100 duration-400"
          : "invisible -translate-y-10 opacity-0 duration-200"
      }`}
    >
      <p>{children}</p>
    </div>
  );
}
