import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1 className="text-center text-red-500">404 - Page non trouvée</h1>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
export default App;
