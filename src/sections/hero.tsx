import { motion } from "framer-motion";

interface HeroProps {
    title: string;
    description: string;
    image: string;
    ctas: {
        text: string;
        href: string;
    }[];
}

export default function Hero({ title, description, image, ctas }: HeroProps) {
    return (
        <div className="relative h-screen flex items-center justify-center text-center px-6 sm:px-12 overflow-hidden">
            {/* Background Image */}
            <motion.img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover brightness-60"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: .8, ease: "easeOut" }}
            />

            {/* Overlay Content */}
            <motion.div
                className="relative z-10 text-white max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .4, ease: "easeOut" }}
            >
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-md">
                    {title}
                </h1>
                <p className="text-base sm:text-lg mt-4 sm:mt-6 text-white/90 drop-shadow">
                    {description}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {ctas.map(({ text, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            className={`
                                px-6 py-3 rounded-xl text-lg font-semibold 
                                shadow-lg transition-all duration-300
                                hover:scale-105
                                ${i === 0
                                    ? "bg-palette-1 text-white hover:bg-palette-1/80"
                                    : "border border-white text-white hover:bg-white hover:text-black"}
                            `}
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

