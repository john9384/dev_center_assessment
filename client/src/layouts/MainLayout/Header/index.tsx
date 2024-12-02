import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link to="/" className="text-xl font-bold text-green-600">
                    Retiree Platform
                </Link>
                <nav className="space-x-4">
                    <Link to="/login" className="text-gray-700 hover:text-green-600">
                        Login
                    </Link>
                    <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Register
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
