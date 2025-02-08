import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import CryptoList from "../Components/CryptoList";
import CryptoChart from "../Components/CryptoChart";
import Header from "../Components/Header";
import Account from "./Account"; // Halaman Akun
import TutorialAndEducation from "./TutorialAndEducation"; // Menambahkan TutorialAndEducation
import CryptoTools from "./CryptoTools"; // Menambahkan CryptoTools

const Dashboard = () => {
    const [activePage, setActivePage] = useState("home");

    // Data pengguna dengan foto profil
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg", // Default URL gambar profil
    });

    // Mengambil data dari localStorage saat pertama kali halaman dimuat
    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedEmail = localStorage.getItem("email");
        const savedProfilePic = localStorage.getItem("profilePic");

        if (savedName) setUserInfo(prev => ({ ...prev, name: savedName }));
        if (savedEmail) setUserInfo(prev => ({ ...prev, email: savedEmail }));
        if (savedProfilePic) setUserInfo(prev => ({ ...prev, profilePic: savedProfilePic }));
    }, []);

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar activePage={activePage} setActivePage={setActivePage} />

            {/* Konten utama */}
            <div className="flex-1 bg-gray-100 min-h-screen">
                <Header />
                <div className="container mx-auto p-6">
                    {activePage === "home" && (
                        <>
                            <div className="flex items-center gap-6 mb-6">
                                <img
                                    src={userInfo.profilePic}  // Menampilkan gambar profil dari localStorage
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full border-2 border-gray-300"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold">Welcome, {userInfo.name}</h2>
                                    <p className="text-gray-600">{userInfo.email}</p>
                                </div>
                            </div>
                            <CryptoChart />
                            <CryptoList />
                        </>
                    )}

                    {activePage === "account" && <Account />} {/* Halaman Akun */}
                    {activePage === "tutorial" && <TutorialAndEducation />} {/* Halaman Tutorial dan Edukasi */}
                    {activePage === "tools" && <CryptoTools />} {/* Halaman Crypto Tools */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
