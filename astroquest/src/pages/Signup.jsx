import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

function AnimatedInput({ id, type, placeholder }) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="relative group w-full">
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(value !== "")}
                className="peer w-full h-12 bg-transparent border border-white rounded-lg text-white text-lg px-4 pt-4 placeholder-transparent transition-all duration-300 focus:outline-none focus:border-[#FFD369]"
                placeholder=" "
            />
            <label
                htmlFor={id}
                className={`
                    absolute left-4 top-1/2 transform -translate-y-1/2 
                    text-gray-400 text-lg transition-all duration-300 
                    pointer-events-none 
                    ${focused || value ? "top-2 text-sm text-[#FFD369]" : ""}
                `}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default function Signup() {
    return (
        <BackgroundLayout>
            <Navbar />
            <div className="border border-white rounded-2xl w-full max-w-2xl px-10 py-10 mt-10">
                <h2 className="text-white text-5xl font-bold font-['Rajdhani'] mb-6 text-center">Create An Account</h2>
                <p className="text-white text-2xl font-['Space_Grotesk'] mb-10 text-center">Join AstroQuest to explore the universe!</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedInput id="fullName" type="text" placeholder="Full Name" />
                    <AnimatedInput id="username" type="text" placeholder="Username" />
                    <div className="col-span-full">
                        <AnimatedInput id="email" type="email" placeholder="Email" />
                    </div>
                    <AnimatedInput id="password" type="password" placeholder="Password" />
                    <AnimatedInput id="confirmPassword" type="password" placeholder="Confirm Password" />
                </form>
                <div className="flex justify-center mt-10">
                    <button
                        type="submit"
                        className="w-[200px] h-[60px] bg-[#FFD369] rounded-full text-[#111A42] text-2xl font-['Inknut_Antiqua']"
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex gap-2 mt-6 justify-center">
                    <p className="text-[#D9E6FF] text-lg font-['Space_Grotesk']">Already have an account?</p>
                    <Link to="/login" className="text-[#D9E6FF] text-lg font-['Space_Grotesk'] ">
                        Sign In
                    </Link>
                </div>
            </div>
        </BackgroundLayout>
    );
}
