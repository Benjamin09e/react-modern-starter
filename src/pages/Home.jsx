import Button from '../components/Button';

function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon app React</h1>
            <p className="mb-6">Une application moderne et bien structurée ✨</p>
            <Button label="Clique ici" onClick={() => alert('Merci Bengy !')} />
        </div>
    );
}
export default Home;