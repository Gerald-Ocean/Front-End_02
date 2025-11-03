const AboutSection = () => {
    return (
        <section className="py-16 px-4 bg-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                    I am a passionate web developer with experience in building dynamic and responsive web applications. I love working with modern technologies and continuously improving my skills to create better user experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">Core Skills</h3>
                    <p className="text-gray-300">Web Design, Branding, Prototyping, User Research</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                 <h3 className="text-xl font-semibold mb-2 text-blue-400">Key Values</h3>
                 <p className="text-gray-300">Attention to detail, good communication and interaction</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">My Goal</h3>
                    <p className="text-gray-300">Turning idea into effective website and visuals</p>
                    </div> 
                </div>  
            </div>
        </section>
    );
};

export default AboutSection;