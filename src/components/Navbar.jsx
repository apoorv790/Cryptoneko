import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cryptlogo from '../assets/logocr.webp';

const Navbar = () => {
  return (
    <nav className="bg-inherit  text-cryptowhite mt-0 m-8 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={cryptlogo} alt="CryptoNeko Logo" className="h-10 mr-2" />
          {/* <span className="text-xl font-bold">CryptoNeko</span> */}
        </Link>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cryptoteal-400" : "text-cryptowhite hover:text-cryptoteal-400"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/tokens"
            className={({ isActive }) =>
              isActive ? "text-cryptoteal-400" : "text-cryptowhite hover:text-cryptoteal-400"
            }
          >
            Tokens
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-cryptoteal-400" : "text-cryptowhite hover:text-cryptoteal-400"
            }
          >
            Search Token
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


