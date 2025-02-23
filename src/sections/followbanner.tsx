import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function FollowBanner() {
    return (
        <div
            className="flex flex-col content-center bg-palette-3 p-16
                        flex-wrap text-white">
            {/* Title Animation */}
            <motion.h1
                className="text-3xl font-extrabold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                Följ Oss!
            </motion.h1>

            {/* Social Icons */}
            <div className="flex space-x-8">
                <motion.a
                    href="https://www.facebook.com/profile.php?id=61550994760407"
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaFacebook />
                </motion.a>

                <motion.a
                    href="https://www.instagram.com/lafamilia_de_m/"
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaInstagram />
                </motion.a>
            </div>
        </div>
    )
};

export default FollowBanner;
