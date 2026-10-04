import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" relative border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold text-blue-700">
          IndigoLearn
        </a>

        <nav className="hidden items-center gap-8 md:flex px-2">
          <a href="#learning" className="text-gray-700 hover:text-blue-700">
            Buy Courses
          </a>

          <a href="#eligibility" className="text-gray-700 hover:text-blue-700">
            Buy Books
          </a>

          <a href="#why-us" className="text-gray-700 hover:text-blue-700">
            Programs
          </a>

          <a href="#learning" className="text-gray-700 hover:text-blue-700">
            Free Resources
          </a>

          <a
            href="#journey"
            className="rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-800"
          >
            Log in / Sign Up
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md border px-3 py-2 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute left-0 top-full w-full border-b bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#learning" onClick={() => setIsMenuOpen(false)}>
              Buy Courses
            </a>
            <a href="#eligibility" onClick={() => setIsMenuOpen(false)}>
              Buy Books
            </a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)}>
              Programs
            </a>
            <a href="#learning" onClick={() => setIsMenuOpen(false)}>
              Free Resources
            </a>
            <a href="#journey" onClick={() => setIsMenuOpen(false)}>
              Log in / Sign Up
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
