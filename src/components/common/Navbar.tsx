import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images from public folder
import MenuIcon from '/menubar.png';
import AstroLogo from '/astro-logo-white.png';

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/yuri-night', label: "Yuri's Night" },
  { path: '/blogs', label: 'Blogs' },
  { path: '/projects', label: 'Projects' },
  { path: '/activities', label: 'Activities' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/team', label: 'Our Team' },
];

const Navbar: React.FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="h-[50px] flex flex-row bg-black justify-between fixed z-50 items-center top-0 w-full">
        {/* Logo */}
        <div className="flex w-[10%] font-bold text-white justify-center items-center mx-5 lg:mx-10 md:mx-8 sm:mx-5">
          <Link to="/">
            <img
              src={AstroLogo}
              alt="Astronomy Club Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex justify-end h-[50px] items-center mx-8 lg:mx-24 md:mx-16 sm:mx-12">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="hidden sm:flex items-center justify-center w-16 sm:w-20 md:w-24 lg:w-28"
            >
              <Link to={link.path}>
                <button className="hover:font-bold transition-transform transform hover:scale-110 text-white text-sm md:text-base whitespace-nowrap cursor-pointer">
                  {link.label}
                </button>
              </Link>
            </div>
          ))}

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex">
            <button
              onClick={toggleMenu}
              className="p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <img
                src={MenuIcon}
                alt="Menu"
                className="w-5 h-5 invert"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuState && (
        <div className="fixed top-[50px] left-0 right-0 flex flex-col bg-black justify-start items-center gap-8 py-8 sm:hidden z-40 border-t border-gray-800">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link to={link.path}>
                <button
                  onClick={closeMenu}
                  className="hover:font-bold transition-transform transform hover:scale-110 text-white text-lg cursor-pointer"
                >
                  {link.label}
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Overlay when mobile menu is open */}
      {menuState && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;