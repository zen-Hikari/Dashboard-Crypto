import { useEffect, useState } from "react";
import { fetchCryptoData } from "../Api/cryptoApi";

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCryptoData();
            setCryptos(data);
        };
        getData();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-3">Top 10 Cryptos</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">#</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price (USD)</th>
                        <th className="border p-2">Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map((crypto, index) => (
                        <tr key={crypto.id} className="text-center">
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2 flex items-center gap-2">
                                <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
                                {crypto.name}
                            </td>
                            <td className="border p-2">${crypto.current_price.toLocaleString()}</td>
                            <td className="border p-2">${crypto.total_volume.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoList;
