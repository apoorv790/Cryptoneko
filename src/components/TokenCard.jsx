import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const TokenCard = ({ token }) => {

    const chartData = [
        { price: token.current_price },
        { price: token.current_price * (1 + token.price_change_percentage_24h / 100) },
        { price: token.current_price * (1 - token.price_change_percentage_24h / 100) },
    ];

    return (
        <div className="bg-cryptogray-800 rounded-lg p-10 text-cryptowhite">
            <div className="flex items-center mb-4">
                <img src={token.image} alt={token.name} className="w-10 h-10 mr-3" />
                <div>
                    <h3 className="text-xl font-bold">{token.name}</h3>
                    <p className="text-gray-400">{token.symbol.toUpperCase()}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-3xl font-bold">${token.current_price.toFixed(2)}</p>
                <p className={`text-sm ${token.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {token.price_change_percentage_24h > 0 ? '+' : ''}{token.price_change_percentage_24h.toFixed(2)}%
                </p>
            </div>
            <div className="h-16 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke={token.price_change_percentage_24h > 0 ? "#4ade80" : "#f87171"}
                            fill={token.price_change_percentage_24h > 0 ? "#4ade8033" : "#f8717133"}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <button className="w-full bg-gray-700 text-teal-400 py-2 rounded-lg hover:bg-gray-600">
                Read More on Token Page
            </button>
        </div>
    );
};

export default TokenCard;
