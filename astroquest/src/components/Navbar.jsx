import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="absolute w-full top-0 left-0 z-30">
            <div className="max-w-[1440px] mx-auto px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-40">
                    <h1 className="text-white text-3xl font-['Inknut_Antiqua'] mb-2 md:mb-0">AstroQuest</h1>
                    <ul className="flex space-x-20 mt-2 md:mt-0">
                        {["Explore", "Learn", "Quiz", "Favorites"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className="text-white text-lg font-['Inknut_Antiqua'] hover:text-[#FFD369] transition"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-600 opacity-50 w-full" />
        </nav>
    );
}
