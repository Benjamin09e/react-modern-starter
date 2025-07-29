function Footer() {
    return (
        <footer className="bg-gray-100 text-center text-sm p-4 mt-10">
            © {new Date().getFullYear()} MonApp. Tous droits réservés.
        </footer>
    );
}

export default Footer;