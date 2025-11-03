import { title } from "process"

const ExperienceSection = () => {
    const experience = [
        {
            title: "Senior Visual Designer",
            company: "Creative Agency ABC",
            period: "2018 - Present",
            responsibilities: [
                "Led design team for large-scale client projects",
                "Developed design system for brand consistency",
                "Collaborated with engineers on design implementation"
            ],
        },
        {
            title: "Junior Web Developer",
            company: "Tech Startup XYZ",
            period: "2015 - 2018",
            responsibilities: [     
        "Oversaw the end-to-end design and development of a mobile application, from initial concept to a successful market launch.",
        "Conducted user research and competitor analysis.",
        "Developed interactive prototypes for usability testing..",
     ],
        },
    ];

    return (
        <section className="py-16 px-4">
        <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, index) => (
         <div key={index} className="border-1-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400">{exp.company} | {exp.period}</p>
            <ul className="mt-2 list-disc list-inside text-gray-300">
                {exp.responsibilities?.map((resp, i) => (
                    <li key={i}>{resp}</li>
                )
            )}
            </ul>
         </div>
        ))}
        </div>
        </div>
        </section>
    );
};

export default ExperienceSection