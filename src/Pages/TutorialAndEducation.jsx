const TutorialAndEducation = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Tutorial & Edukasi</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-semibold">Apa itu Cryptocurrency?</h3>
                    <p className="text-gray-600">
                        Cryptocurrency adalah bentuk mata uang digital yang menggunakan kriptografi untuk
                        menjaga keamanannya. Hal ini membuat cryptocurrency sangat sulit untuk dipalsukan atau
                        dibelanjakan lebih dari sekali.
                    </p>
                    <a href="https://www.coindesk.com/learn/" target="_blank" className="text-blue-500 hover:underline">
                        Pelajari lebih lanjut
                    </a>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Cara Memulai Investasi Crypto</h3>
                    <p className="text-gray-600">
                        Untuk memulai investasi cryptocurrency, Anda perlu memilih platform exchange, membuat akun,
                        dan melakukan deposit dengan uang fiat atau cryptocurrency lain.
                    </p>
                    <a href="https://www.coinbase.com/learn" target="_blank" className="text-blue-500 hover:underline">
                        Pelajari lebih lanjut
                    </a>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Menjaga Keamanan Crypto</h3>
                    <p className="text-gray-600">
                        Keamanan adalah salah satu faktor paling penting dalam dunia cryptocurrency. Pastikan Anda
                        selalu menggunakan wallet yang aman dan menjaga kunci privat Anda.
                    </p>
                    <a href="https://www.bitcoin.org/en/how-it-works" target="_blank" className="text-blue-500 hover:underline">
                        Pelajari lebih lanjut
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TutorialAndEducation;
