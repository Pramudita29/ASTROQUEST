import { useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi"; // Dropdown arrow icon from Heroicons
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isLandingPage = pathname === "/";

    const [userInitial, setUserInitial] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("user") !== null;

    useEffect(() => {
        if (isLoggedIn) {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.username) {
                setUserInitial(storedUser.username[0].toUpperCase());
            }
        }
    }, [isLoggedIn]);

    // Logout function
    const handleLogout = () => {
        // Clear all user-related data from localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("quizHistory");
        localStorage.removeItem("explorationStats");
        setUserInitial(null); // Remove userInitial on logout
        navigate("/login"); // Redirect to login page
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Navigate to the correct location when the logo is clicked
    const handleLogoClick = () => {
        if (isLoggedIn) {
            navigate("/dashboard");
        } else {
            navigate("/");
        }
    };

    return (
        <nav className="absolute w-full top-0 left-0 z-30">
            <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
                {/* Left Section: Logo + Nav Links */}
                <div className="flex items-center space-x-16">
                    <h1
                        onClick={handleLogoClick} // Redirect to landing or dashboard based on login status
                        className="text-white text-3xl font-['Inknut_Antiqua'] cursor-pointer hover:text-[#FFD369] transition"
                    >
                        AstroQuest
                    </h1>
                    {/* Navbar links */}
                    <ul className="flex space-x-20">
                        {["Explore", "Learn", "Quiz", "Favorites"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className={`text-lg font-['Inknut_Antiqua'] transition ${isLoggedIn ? "text-white hover:text-[#FFD369]" : "text-white pointer-events-none"}`}
                                    aria-disabled={!isLoggedIn}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                {isLoggedIn ? (
                    <div className="relative flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
                        <FaUserAstronaut className="text-white text-2xl" />
                        <span className="text-white text-lg font-semibold font-['Inknut_Antiqua']">
                            {userInitial}
                        </span>
                        {/* Dropdown arrow */}
                        <HiChevronDown className="text-white text-lg" />

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute top-full mt-7 right-0 w-48 bg-transparent border border-white text-white rounded-md shadow-lg">
                                <ul className="space-y-2 p-2">
                                    <li>
                                        <Link
                                            to="/profile"
                                            className="block text-sm px-4 py-2 hover:bg-gray-800"
                                            onClick={() => navigate("/profile")}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="w-full text-sm px-4 py-2 text-white text-left bg-transparent hover:bg-gray-800"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    isLandingPage && (
                        <div>
                            <Link
                                to="/login"
                                className="text-white text-lg font-['Inknut_Antiqua'] hover:text-[#FFD369] transition"
                            >
                                Login
                            </Link>
                            <span className="text-white mx-2 font-['Inknut_Antiqua']">/</span>
                            <Link
                                to="/signup"
                                className="text-white text-lg font-['Inknut_Antiqua'] hover:text-[#FFD369] transition"
                            >
                                Signup
                            </Link>
                        </div>
                    )
                )}
            </div>
            <div className="border-t border-gray-600 opacity-50 w-full" />
        </nav>
    );
}
