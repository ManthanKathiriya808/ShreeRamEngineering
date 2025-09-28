import { useState, useEffect } from "react";
import { Link } from "react-router";
import LazyImage from "../LazyImage/LazyImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 left-0 w-full z-20 bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <LazyImage 
            src="/SRE LOGO.gif" 
            className="h-8 w-8 sm:h-10 sm:w-10" 
            alt="ShreeRam Engineering Logo"
            effect="opacity"
          />
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl title-font text-[var(--blue)] font-bold leading-tight">
            <span className=" sm:inline">SHREE RAM ENGINEERING</span>
         
          </span>
        </Link>

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
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 hover:text-[var(--blue)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/facilities" 
              className="block py-2 hover:text-[var(--blue)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Facilities
            </Link>

            {/* Mobile Products Dropdown */}
            <div className="space-y-2">
              <button 
                className="flex items-center justify-between w-full py-2 hover:text-[var(--blue)] transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Products
                <span className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              
              {dropdownOpen && (
                <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                  <Link 
                    to="/products/industrial-valves" 
                    className="block py-2 hover:text-[var(--blue)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Industrial Valves
                  </Link>
                  <Link 
                    to="/products/general-items" 
                    className="block py-2 hover:text-[var(--blue)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    General Engineering Items
                  </Link>
                  <Link 
                    to="/products/fabrication-items" 
                    className="block py-2 hover:text-[var(--blue)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Fabrication Items
                  </Link>
                  <Link 
                    to="/products/pump-spares" 
                    className="block py-2 hover:text-[var(--blue)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pump Spares
                  </Link>
                  <Link 
                    to="/products/pa-nozzels" 
                    className="block py-2 hover:text-[var(--blue)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    PA Nozzles
                  </Link>
                  <Link 
                    to="/products/fasteners-pipe" 
                    className="block py-2 hover:text-[var(--blue)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Fasteners & Pipe Fittings
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/quality" 
              className="block py-2 hover:text-[var(--blue)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Quality
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:text-[var(--blue)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block bg-[var(--blue)] px-4 py-3 font-semibold text-white rounded-md text-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
