import React from 'react';
import TokenCard from './TokenCard';

const TokenList = ({ coins = [] }) => {
    if (!coins.length) {
        return <div className="text-center text-white">No tokens available</div>;
      }
  return (
    <div className="bg-inherit py-16 mx-24">
        <h2>Top Tokenssss</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {coins.map((token, index) => (
            <TokenCard key={token.id} token={token} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-cryptoteal-400 text-cryptogray-900 px-6 py-3 rounded-lg font-bold hover:bg-opacity-80">
            Check All Tokens
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenList;
