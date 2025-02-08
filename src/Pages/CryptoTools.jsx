const CryptoTools = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Crypto Tools</h2>
            <div className="space-y-4">
                <div className="border-b pb-4">
                    <h3 className="text-2xl font-semibold">Harga Cryptocurrency Real-Time</h3>
                    <p className="text-gray-600">Gunakan alat ini untuk memantau harga cryptocurrency secara real-time.</p>
                    <a href="https://www.coingecko.com/en" target="_blank" className="text-blue-500 hover:underline">
                        Cek Harga
                    </a>
                </div>
                <div className="border-b pb-4">
                    <h3 className="text-2xl font-semibold">Perkiraan Keuntungan</h3>
                    <p className="text-gray-600">Perkirakan keuntungan investasi crypto Anda dengan alat ini.</p>
                    <a href="https://www.cointracker.io/" target="_blank" className="text-blue-500 hover:underline">
                        Gunakan CoinTracker
                    </a>
                </div>
                <div className="border-b pb-4">
                    <h3 className="text-2xl font-semibold">Pencarian ICO Terbaru</h3>
                    <p className="text-gray-600">Dapatkan informasi terbaru tentang Initial Coin Offerings (ICO) yang akan datang.</p>
                    <a href="https://www.coingecko.com/en/icos" target="_blank" className="text-blue-500 hover:underline">
                        Lihat ICO
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CryptoTools;
