import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        message: "",
    });
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        emailjs
            .sendForm("service_Bengyabc123", "template_Bengyxyz789", form.current, {
                publicKey: "5Yx6pUv2A_BengyBCd3F",
            })
            .then(() => {
                setIsSent(true);
                setFormData({ nom: "", email: "", message: "" });
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Échec de l'envoi, veuillez réessayer.");
                console.error("FAILED...", err.text);
                setIsLoading(false);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-10">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 transition-all">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact</h2>
                <p className="text-gray-600 text-center mb-6">
                    Toujours ouvert aux échanges ! Que ce soit pour discuter de développement fullstack,
                    cybersécurité ou pentesting, je serais ravi d’échanger avec vous.
                </p>

                {isSent && (
                    <p className="text-green-600 text-center font-medium mb-4">
                        ✅ Message envoyé avec succès !
                    </p>
                )}
                {error && (
                    <p className="text-red-600 text-center font-medium mb-4">
                        ❌ {error}
                    </p>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <input
                        type="text"
                        name="nom"
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-6 text-white font-semibold rounded-xl transition duration-200 ${
                            isLoading
                                ? "bg-blue-300 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
