import { Link } from 'react-router-dom';

function Navbar() {
return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold">MonApp</Link>
        <div>
          <Link to="/" className="hover:underline">Accueil</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;