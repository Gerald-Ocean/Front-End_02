import { title } from "process"

const PortfolioSection = () => {
    const project = {
        title: "E-commerce Platform for XYZ Retail",
        image: "/logodummy3.png",
        technologies: ["Figma", "React", "Node.js", "MongoDB"],
        content: {
            situation: "XYZ Retail, an established retail company, aims to expand into e-commerce to reach a wider audience.",
            task:  "My role is to craft the complete user experience (UX) and user interface (UI) for the platform, overseeing the process from initial concept through to a final, polished prototype.",
            action: "Leveraging Figma, I crafted wireframes, high-fidelity mockups, and interactive prototypes. To ensure a user-centered approach, I performed multiple usability tests to collect feedback and refine the designs.",
            result: "The final design was very well received by both the client and the development team. The platform was successfully launched and achieved a 35% increase in online sales within the first 3 months.",
        },
    };

    return (
        <section className="py-16 px-4 bg-gray-800">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Selected Portfolio</h2>

                <div className="bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                    <div className="h-48 md:h-64 bg-gray-600 flex items-center justify-center overflow-hidden">
                        <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="bg-blue-600 text-xs px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            )
                        )}
                        </div>

                        <div className="space-y-4 text-gray-300">
                        <div>
                        <h4 className="font-semibold text-white">Situation:</h4>
                        <p>{project.content.situation}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Task:</h4>
                            <p>{project.content.task}</p>
                        </div>
                         <div>
                            <h4 className="font-semibold text-white">Action:</h4>
                            <p>{project.content.action}</p>
                        </div>
                         <div>
                <h4 className="font-semibold text-white">Result:</h4>
                <p>{project.content.result}</p>
              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection