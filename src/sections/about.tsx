import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

function About() {
    return (
        <motion.div
            id="about-section"
            className="about-section flex flex-col items-center text-center relative overflow-hidden py-16 px-6 lg:px-12 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Sparkle Background */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-palette-4/5 to-transparent"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Title */}
            <motion.h1
                className="text-palette-4 text-4xl lg:text-5xl font-bold mb-8 drop-shadow-sm"
                variants={{
                    hidden: { scale: 0.85, opacity: 0 },
                    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200 } },
                }}
            >
                Om oss
            </motion.h1>

            {/* Image */}
            <motion.div
                className="w-full max-w-4xl h-[40vh] lg:h-[50vh] overflow-hidden rounded-3xl shadow-xl mb-8"
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
                }}
            >
                <img
                    src="foodtruck.jpg"
                    alt="La Familia Foodtruck"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Text Section */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 lg:px-6">
                <motion.p variants={childVariants}>
                    Vi på <strong>La Familia</strong> brinner för att skapa smakupplevelser som både glädjer och mättar.
                    Vår foodtruck är ett familjeföretag med en enkel vision – att erbjuda högkvalitativ och välsmakande mat för alla.
                </motion.p>

                <motion.p variants={childVariants}>
                    Våra rätter kombinerar tex mex & mellanöstern-inspirerade smaker och vi erbjuder både
                    vegetariska, veganska & kycklingalternativ, alltid tillagade med färska och lokala råvaror.
                </motion.p>

                <motion.p variants={childVariants}>
                    Planerar du ett event? Vi fixar maten! Oavsett om det är en fest, företagsmiddag eller bröllop,
                    anpassar vi vår catering så att det blir en oförglömlig smakupplevelse för dig och dina gäster.
                </motion.p>

                <motion.p
                    className="font-semibold text-gray-800"
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        show: { opacity: 1, scale: 1 },
                    }}
                >
                    Vi älskar mat. Vi älskar gemenskap. Vi älskar att dela goda smaker med er!
                </motion.p>
            </div>
        </motion.div>
    );
}

export default About;

