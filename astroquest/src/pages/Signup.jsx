import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

function AnimatedInput({ id, type, placeholder, value, onChange }) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative group w-full">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(value !== "")}
                className="peer w-full h-12 bg-transparent border border-white rounded-lg text-white text-lg px-4 pt-4 placeholder-transparent transition-all duration-300 focus:outline-none focus:border-[#FFD369]"
                placeholder=" "
            />
            <label
                htmlFor={id}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 pointer-events-none ${focused || value ? "top-2 text-sm text-[#FFD369]" : ""}`}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const res = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            navigate("/login");
        } else {
            setError(data.error || "Registration failed");
        }
    };

    return (
        <BackgroundLayout>
            <Navbar />
            <div className="border border-white rounded-2xl w-full max-w-2xl px-10 py-10 mt-10">
                <h2 className="text-white text-5xl font-bold font-['Rajdhani'] mb-6 text-center">Create An Account</h2>
                <p className="text-white text-2xl font-['Space_Grotesk'] mb-6 text-center">Join AstroQuest to explore the universe!</p>

                {error && <p className="text-red-400 text-center mb-4">{error}</p>}

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    <AnimatedInput id="fullName" type="text" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
                    <AnimatedInput id="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} />
                    <div className="col-span-full">
                        <AnimatedInput id="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
                    </div>
                    <AnimatedInput id="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
                    <AnimatedInput id="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
                    <div className="col-span-full flex justify-center mt-4">
                        <button type="submit" className="w-[200px] h-[60px] bg-[#FFD369] rounded-full text-[#111A42] text-2xl font-['Inknut_Antiqua']">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="flex gap-2 mt-6 justify-center">
                    <p className="text-[#D9E6FF] text-lg font-['Space_Grotesk']">Already have an account?</p>
                    <Link to="/login" className="text-[#D9E6FF] text-lg font-['Space_Grotesk']">
                        Sign In
                    </Link>
                </div>
            </div>
        </BackgroundLayout>
    );
}
