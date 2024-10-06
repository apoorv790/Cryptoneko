import React from 'react';


const CoinTable = ({coins}) => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 text-white">
                <thead>
                    <tr className="border-b border-gray-800 text-md">
                        <th className="px-4 py-3 text-left">Rank</th>
                        <th className="px-4 py-3 text-left">Coin</th>
                        <th className="px-4 py-3 text-right">Price</th>
                        <th className="px-4 py-3 text-right">24h</th>
                        <th className="px-4 py-3 text-right">Market Cap</th>
                        <th className="px-4 py-3 text-right">24h Volume</th>
                        <th className="px-4 py-3 text-center">Sparkline</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <tr key={coin.id} className="border-b border-gray-800 hover:bg-gray-800 text-sm">
                            <td className="px-4 py-3">{index + 1}</td>
                            <td className="px-4 py-3 flex items-center">
                                <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                                <span>{coin.name}</span>
                                <span className="text-gray-500 ml-2">{coin.symbol.toUpperCase()}</span>
                            </td>
                            <td className="px-4 py-3 text-right">${coin.current_price?.toLocaleString()}</td>
                            <td className={`px-4 py-3 text-right ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {coin.price_change_percentage_24h?.toFixed(2) || 'N/A'}%
                            </td>
                            <td className="px-4 py-3 text-right">${coin.market_cap?.toLocaleString() || 'N/A'}</td>
                            <td className="px-4 py-3 text-right">${coin.total_volume?.toLocaleString() || 'N/A'}</td>
                            <td className="px-4 py-3">
                                <svg width="100" height="30" viewBox="0 0 100 30">
                                    <polyline
                                        fill="none"
                                        stroke={coin.price_change_percentage_24h > 0 ? "#4ade80" : "#f87171"}
                                        strokeWidth="2"
                                        points={coin.sparkline_in_7d?.price.map((price, i) => `${(i / (coin.sparkline_in_7d.price.length - 1)) * 100},${30 - ((price - Math.min(...coin.sparkline_in_7d.price)) / (Math.max(...coin.sparkline_in_7d.price) - Math.min(...coin.sparkline_in_7d.price))) * 30}`).join(' ') || ''}
                                    />
                                </svg>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoinTable;