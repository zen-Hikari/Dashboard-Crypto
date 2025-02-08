import { useState, useEffect } from "react";

const Account = () => {
    // State untuk nama, email, dan foto profil
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState("");

    // Mengambil data dari localStorage saat pertama kali halaman dimuat
    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedEmail = localStorage.getItem("email");
        const savedProfilePic = localStorage.getItem("profilePic");

        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedProfilePic) setProfilePic(savedProfilePic);
    }, []);

    // Menyimpan data ke localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    };

    // Handle perubahan foto profil
    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result); // Set gambar profil baru
                saveToLocalStorage(); // Simpan ke localStorage
            };
            reader.readAsDataURL(file); // Mengubah file menjadi data URL
        }
    };

    return (
        <div className="account-container">
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

            {/* Gambar profil saat ini */}
            <div className="flex items-center gap-6 mb-6">
                <img
                    src={profilePic || "https://randomuser.me/api/portraits/men/1.jpg"} // Menampilkan gambar profil yang telah diubah
                    alt="Profile"
                    className="w-16 h-16 rounded-full border-2 border-gray-300"
                />
                <div>
                    <h3 className="text-xl">Change Profile Picture</h3>
                    {/* Input untuk mengganti gambar profil */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}  // Fungsi untuk mengganti foto profil
                        className="mt-4 text-sm"
                    />
                </div>
            </div>

            {/* Form untuk update nama */}
            <div className="mb-4">
                <label className="block text-sm">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update nama
                    className="border p-2 rounded w-full mt-2"
                />
            </div>

            {/* Form untuk update email */}
            <div className="mb-4">
                <label className="block text-sm">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email
                    className="border p-2 rounded w-full mt-2"
                />
            </div>

            {/* Button untuk menyimpan perubahan */}
            <button
                onClick={saveToLocalStorage} // Simpan data ke localStorage
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Save Changes
            </button>
        </div>
    );
};

export default Account;
