import { motion } from "framer-motion";

function Catering() {
    const containerVariants = {
        hidden: {}, // no transform or opacity change on parent container
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    };

    return (
        <motion.div
            id="catering-section"
            className="w-full flex flex-col-reverse px-8 py-12 content-center 
                        flex-wrap lg:flex-row lg:px-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            {/* Text Content */}
            <motion.div
                className="pt-8 w-full lg:w-1/2"
                variants={textVariants}
            >
                <h1 className="text-palette-4 text-4xl text-center font-bold mb-6">
                    Catering
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    La Familia erbjuder flexibel catering som passar alla tillfällen och smaker! Oavsett
                    om du planerar en företagsevent, ett bröllop eller en fest, kan vi skräddarsy en
                    meny som passar just dina gästers behov. Vi erbjuder både vegetariska, veganska och
                    kycklingalternativ, med inspiration från tex mex och mellanöstern – allt tillagat
                    med färska, smakrika ingredienser.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    Låt oss ta hand om maten och skapa en minnesvärd upplevelse för ditt event, med en
                    meny som kan anpassas efter dina önskemål och preferenser.
                </p>
            </motion.div>

            {/* Image */}
            <motion.div
                className="w-full flex content-center justify-center 
                            flex-wrap pt-8 lg:justify-end lg:w-1/2"
                variants={imageVariants}
            >
                <div className="w-full lg:w-2/3 overflow-hidden rounded-2xl shadow-lg">
                    <motion.img
                        src="foodtruckqeue.jpg"
                        alt="foodtruck"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Catering;

