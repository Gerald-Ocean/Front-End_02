const SkillsSection = () => {
    const skills = {
        "Design Tools" : ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
        "Development" : ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        "Other": ["Prototyping", "Wireframing", "User Testing", "Agile"],
    };

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="text-center">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-400">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {items.map((skill) => (
                                    <span key={skill} className="bg-gray-700 px-4 py-2 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                )}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection