import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome To</h1>
        <h2 className="text-6xl font-bold mb-8 text-teal-400">CryptoNeko</h2>
        <p className="text-xl mb-12">Your buddy to help get information about the CryptoTokens.</p>
        <div className="flex justify-center">
          <span  
            className="px-4 py-3 rounded-l-lg w-96 bg-gray-800 text-white border-2 border-teal-400 focus:outline-none"
          >Check out the coins</span>
          <Link 
            to="/Tokens" 
            className="bg-gradient-to-r from-cryptoblue-500 to-cryptoteal-400 text-cryptowhite px-6 py-3 rounded-r-lg font-bold"
          >
            Tokens
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;