import PropTypes from 'prop-types';
import { FaHome, FaUser, FaCalculator, FaBook } from "react-icons/fa"; 

const Sidebar = ({ activePage, setActivePage }) => {
    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
            <h1 className="text-2xl font-bold text-center mb-6">CryptoDash</h1>
            <nav>
                <ul className="space-y-4">
                    <li
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                            activePage === "home" ? "bg-gray-700" : "hover:bg-gray-800"
                        }`}
                        onClick={() => setActivePage("home")}
                    >
                        <FaHome /> Home
                    </li>
                 
                   
                    <li
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                            activePage === "tutorial" ? "bg-gray-700" : "hover:bg-gray-800"
                        }`}
                        onClick={() => setActivePage("tutorial")}
                    >
                        <FaBook /> Tutorial & Edukasi
                    </li>
                    <li
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                            activePage === "tools" ? "bg-gray-700" : "hover:bg-gray-800"
                        }`}
                        onClick={() => setActivePage("tools")}
                    >
                        <FaCalculator /> Crypto Tools
                    </li>

                    <li
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                            activePage === "portfolio" ? "bg-gray-700" : "hover:bg-gray-800"
                        }`}
                        onClick={() => setActivePage("account")}
                    >
                        <FaUser /> Account
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

Sidebar.propTypes = {
    activePage: PropTypes.string.isRequired,
    setActivePage: PropTypes.func.isRequired,
};

export default Sidebar;
