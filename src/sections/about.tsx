import { motion } from "framer-motion";

function About() {
    return (
        <motion.div
            id="about-section"
            className="about-section flex flex-col items-center text-center relative overflow-hidden py-12 px-6 lg:px-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Sparkle Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

            {/* Title Animation */}
            <motion.h1
                className="text-palette-4 text-4xl font-bold mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                Om oss
            </motion.h1>

            <motion.div
                className="w-screen h-[50vh] overflow-hidden rounded-2xl shadow-lg mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <img
                    src="foodtruck.jpg"
                    alt="La Familia Foodtruck"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </motion.div>

            {/* Text Section with Fade-in Effect */}
            <motion.p
                className="lg:px-20 text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
                Vi på <strong>La Familia</strong> brinner för att skapa smakupplevelser som både glädjer och mättar.
                Vår foodtruck är ett familjeföretag med en enkel vision – att erbjuda högkvalitativ och välsmakande mat för alla.
            </motion.p>

            <motion.p
                className="lg:px-20 text-lg leading-relaxed text-gray-700 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
                Våra rätter kombinerar tex mex & mellanöstern-inspirerade smaker och vi erbjuder både
                vegetariska, veganska & kycklingalternativ, alltid tillagade med färska och lokala råvaror.
            </motion.p>

            <motion.p
                className="lg:px-20 text-lg leading-relaxed text-gray-700 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
                Planerar du ett event? Vi fixar maten! Oavsett om det är en fest, företagsmiddag eller bröllop,
                anpassar vi vår catering så att det blir en oförglömlig smakupplevelse för dig och dina gäster.
            </motion.p>

            <motion.p
                className="lg:px-20 text-lg font-semibold text-gray-800 mt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
                Vi älskar mat. Vi älskar gemenskap. Vi älskar att dela goda smaker med er!
            </motion.p>
        </motion.div>
    );
}

export default About;

