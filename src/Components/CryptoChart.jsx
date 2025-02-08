import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { fetchCryptoData } from "../Api/cryptoApi";

const CryptoChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const cryptos = await fetchCryptoData();
            if (cryptos.length > 0) {
                setData(cryptos[0].sparkline_in_7d.price.map((price, index) => ({
                    time: index,
                    price: price
                })));
            }
        };
        getData();
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7-Day Price Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    {/* X and Y axes with custom ticks */}
                    <XAxis 
                        dataKey="time" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: "#888" }} 
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: "#888" }} 
                        domain={['auto', 'auto']} 
                    />
                    {/* Tooltip styled with a clean, soft design */}
                    <Tooltip 
                        contentStyle={{ backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ddd", padding: "10px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }} 
                        labelStyle={{ fontWeight: "bold" }}
                    />
                    {/* Line with smooth curve and hover effect */}
                    <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#4A90E2" 
                        strokeWidth={3} 
                        dot={{ r: 4, stroke: "#4A90E2", strokeWidth: 2, fill: "#fff" }} 
                        activeDot={{ r: 6, stroke: "#4A90E2", strokeWidth: 2, fill: "#fff" }} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CryptoChart;
