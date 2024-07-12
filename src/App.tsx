import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./App.css";
import Wallet from "@/components/Wallet";
import TextGame from "@/components/TextGame";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <div className="min-h-screen bg-gray-700">
                <header className="bg-blue-500 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                            <h1 className="text-2xl font-bold">My App</h1>
                            <nav className="hidden md:flex space-x-4">
                                <Link to="/" className="hover:text-blue-200">
                                    Home
                                </Link>
                                <Link
                                    to="/game"
                                    className="hover:text-blue-200"
                                >
                                    Game
                                </Link>
                                <Link
                                    to="/wallet"
                                    className="hover:text-blue-200"
                                >
                                    Wallet
                                </Link>
                            </nav>
                            <button className="md:hidden" onClick={toggleMenu}>
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <nav className="md:hidden">
                            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                                <Link
                                    to="/"
                                    className="hover:text-blue-200"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/game"
                                    className="hover:text-blue-200"
                                    onClick={toggleMenu}
                                >
                                    Game
                                </Link>
                                <Link
                                    to="/wallet"
                                    className="hover:text-blue-200"
                                    onClick={toggleMenu}
                                >
                                    Wallet
                                </Link>
                            </div>
                        </nav>
                    )}
                </header>
                <main className="">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<TextGame />} />
                        <Route path="/wallet" element={<Wallet />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

function Home() {
    return <h2 className="text-2xl font-bold">Welcome to the Home Page</h2>;
}

export default App;
