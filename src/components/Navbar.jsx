import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-semibold">MonApp</Link>
                <div className="pr-5 flex justify-between items-center">
                    <div> <Link to="/" className="hover:underline pr-5">Accueil</Link> </div>
                    <div> <Link to="/contact" className="hover:underline">Contact</Link> </div>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;