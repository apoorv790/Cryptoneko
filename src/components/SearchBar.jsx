import React, { useState } from 'react';
import TokenCard from './TokenCard';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/search?query=${searchQuery}`
            );
            const data = await response.json();

            // Get details for each found coin
            const coinDetails = await Promise.all(
                data.coins.slice(0, 5).map(async (coin) => {
                    const res = await fetch(
                        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin.id}`
                    );
                    const details = await res.json();
                    return details[0];
                })
            );

            setSearchResults(coinDetails.filter((coin) => coin)); // Filter out any undefined values
        } catch (error) {
            console.error('Error fetching search data:', error);
        }
        setLoading(false);
    };

    return (
        <div className="my-8">
            <input
                type="text"
                placeholder="Search for a token"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-full rounded"
            />
            <button
                onClick={handleSearch}
                className="bg-teal-500 text-white px-4 py-2 rounded mt-2"
                disabled={loading}
            >
                {loading ? 'Searching...' : 'Search'}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {searchResults.map((result) => (
                    <TokenCard key={result.id} token={result} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
