import { useState } from "react";
import { Link } from "react-router";
import LazyImage from "../LazyImage/LazyImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [valveDropdownOpen, setValveDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full z-20 bg-white text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <LazyImage 
            src="/SRE LOGO.gif" 
            className="h-10 w-10" 
            alt="logo"
            effect="opacity"
          />
          <span className="text-2xl title-font text-[var(--blue)] ">
            SHREE RAM ENGINEERING
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-[var(--blue)]">Home</Link>
          <Link to="/facilities" className="hover:text-[var(--blue)]">Facilities</Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-[var(--blue)] flex items-center">
              Products ▾
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-0 w-64 py-4 bg-white text-black rounded-md shadow-lg  z-50">
                <div className="px-4">
                  <Link to="/products/industrial-valves" className="block px-3 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">
                    Industrial Valves
                  </Link>
                  <Link to="/products/general-items" className="block px-3 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">General Engineering Items</Link>
                  <Link to="/products/fabrication-items" className="block px-3 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Fabrication Items</Link>
                  <Link to="/products/pump-spares" className="block px-3 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Pump Spares</Link>
                  <Link to="/products/pa-nozzels" className="block px-3 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">PA Nozzles</Link>
                  <Link to="/products/fasteners-pipe" className="block px-3 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Fasteners & Pipe Fittings</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/quality" className="hover:text-[var(--blue)]">Quality</Link>
          <Link to="/about" className="hover:text-[var(--blue)]">About Us</Link>
          <Link
            to="/contact"
            className="ml-6 bg-[var(--blue)] px-4 py-2 hover:bg-blue-500 font-semibold text-white rounded-md"
          >
            Contact Us
          </Link>


        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col space-y-4 px-6 py-4">
          <Link to="/" className="hover:text-[var(--blue)]">Home</Link>
          <Link to="/services" className="hover:text-[var(--blue)]">Facilities</Link>

          {/* Mobile Products Dropdown */}
          <details className="group">
            <summary className="hover:text-[var(--blue)] cursor-pointer">
              Products
            </summary>
            <div className="ml-4 mt-2 flex flex-col space-y-2">
              <Link to="/products/industrial-valves" className="block px-4 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Industrial Valves</Link>
              <Link to="/products/general-items" className="block px-4 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">General Engineering Items</Link>
              <Link to="/products/fabrication-items" className="block px-4 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Fabrication Items</Link>
              <Link to="/products/pump-spares" className="block px-4 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Pump Spares</Link>
              <Link to="/products/pa-nozzels" className="block px-4 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">PA Nozzles</Link>
              <Link to="/products/fasteners-pipe" className="block px-4 py-2 hover:bg-gray-100 rounded hover:text-[var(--blue)] transition-colors">Fasteners & Pipe Fittings</Link>
            </div>
          </details>

          <Link to="/about" className="hover:text-[var(--blue)]">Quality</Link>
          <Link to="/blog" className="hover:text-[var(--blue)]">About Us</Link>
          <Link
            to="/contact"
            className="bg-[var(--blue)] px-4 hover:bg-blue-500 py-2 font-semibold text-white rounded-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
