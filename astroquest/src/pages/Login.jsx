import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify and ToastContainer
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

// AnimatedInput Component for custom input field with label animation
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
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-all duration-300 pointer-events-none ${focused || value ? "hidden" : ""}`}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // Check role and redirect accordingly
            const userRole = data.user.role;  // Assuming role is part of user data
            if (userRole === "admin") {
                navigate("/admin"); // Redirect to admin dashboard
            } else {
                navigate("/dashboard"); // Redirect to user dashboard
            }

            // Display login success toast
            toast.success("Login successful!"); // Toast notification
        } else {
            setError(data.error || "Login failed");
        }
    };

    return (
        <>
            <BackgroundLayout>
                <Navbar />
                <div className="border border-white rounded-2xl w-full max-w-2xl px-10 py-10 mt-10">
                    <h2 className="text-white text-5xl font-bold font-['Rajdhani'] mb-6 text-center">Welcome Back!</h2>
                    <p className="text-white text-2xl font-['Space_Grotesk'] mb-6 text-center">Log in to explore the Universe</p>

                    {error && <p className="text-red-400 text-center mb-4">{error}</p>}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <AnimatedInput
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <AnimatedInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-center">
                            <button type="submit" className="mt-6 w-[200px] h-[60px] bg-[#FFD369] rounded-full text-[#111A42] text-2xl font-['Inknut_Antiqua']">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="flex gap-2 mt-6 justify-center">
                        <p className="text-[#D9E6FF] text-lg font-['Space_Grotesk']">Don’t have an account?</p>
                        <Link to="/signup" className="text-[#D9E6FF] text-lg font-['Space_Grotesk']">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </BackgroundLayout>

            {/* Add ToastContainer here to display toast messages globally */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />
        </>
    );
}
