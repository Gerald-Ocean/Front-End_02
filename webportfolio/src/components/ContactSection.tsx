const ContactSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
                    {/* Formulir Kontak */}
                    <div className="md:w-1/2">
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 border-gray-600 focus:border-blue-500 focus:outline-none" />
                        <input type="text" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 border-gray-600 focus:border-blue-500 focus:outline-none" />
                        <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"></textarea>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                            Send Message
                        </button>
                        </form>
                        </div>

                        {/* Info Kontak */}
                        <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                        <p className="text-gray-300 mb-6">
                            I'm always excited to explore new projects, discuss creative ideas, and discover opportunities to bring your vision to life.
                        </p>
                        <p className="text-gray-300 mb-2">
                            <strong>Email:</strong> geraldjadisukses@contoh.com 
                        </p>
                        <div className="flex gap-4 mt-6">
                            {[
                                { name: "LinkedIn", url: "https://linkedin.com" },
                                { name: "Dribbble", url: "https://dribbble.com" },
                                { name: "GitHub", url: "https://github.com/Gerald-Ocean" }
                            ].map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-xs"
                                >
                                    {social.name.slice(0, 2)}
                                </a>
                            ))}
                        </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection