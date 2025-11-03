import Image from "next/image";

const HeroSection = () => {
    return (
       <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Teks di Kiri */}
            <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hello, I'm <span className="text-blue-500">Gerald</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mt-2">
                Visual Designer
            </p>
            <p className="text-lg text-gray-300 mt-4">
                Building scalable and high-perfomance web solutions for your business needs.
            </p>
            <div className="mt-8 space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    View Portofolio
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    Contact Me
                </button>
            </div>
            </div>

            {/* Foto di Kanan */}
            <div className="md:w-1/2 flex justify-center">
            <Image 
            src="/gerald-photo..jpg"
            alt="Gerald Photo"
            width={400}
            height={400}
            className="rounded-full shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80"
            />
            </div>
        </div>
       </section> 
    );
};

export default HeroSection