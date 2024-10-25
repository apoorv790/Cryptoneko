import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import CoinTable from '../components/CoinTable'

const Tokens = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}` 
                    },
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 50,
                        page: 1,
                        sparkline: true,
                    }
                });
                console.log(response.data);
                setCoins(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching coin data:', error);
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    if (loading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    return (
        <div className='bg-inherit'>T
            <div className='mx-20 mb-10 '>
                <CoinTable coins={coins} />
            </div>
            {/* <div className='mx-20 mb-20 '>
                <TokenList coins={coins} />
            </div> */}
        </div>
    )
}


export default Tokens