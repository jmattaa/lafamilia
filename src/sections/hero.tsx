import { motion } from "framer-motion";

interface HeroProps {
    title: string;
    description: string;
    image: string;
    cta_text: string;
    cta_redirect: string;
}

function Hero(
    { title, description, image, cta_text, cta_redirect }: HeroProps
) {
    return (
        <div className="relative h-screen flex items-center justify-center text-center px-6">
            {/* Background Image */}
            <motion.img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-lg mt-4">{description}</p>
                <motion.a
                    href={cta_redirect}
                    className="mt-6 inline-block bg-palette-1 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md transition-all hover:bg-palette-1/80"
                    whileHover={{ scale: 1.05 }}
                >
                    {cta_text}
                </motion.a>
            </motion.div>
        </div>
    );
}

export default Hero;

