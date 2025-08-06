import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// i should prolly script ts
const images = [
    "/foodtruck.jpg",
    "/foodtruck1.jpg",
    "/foodtruckhornstull.jpg",
    "/foodtruckkungs.jpg",
    "/foodtruckkungs1.jpg",
    "/foodtruckqeue.jpg",
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const ImageCarousel = () => {
    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[(page + images.length) % images.length]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    className="absolute w-full h-full object-cover rounded-xl"
                    loading="lazy"
                />
            </AnimatePresence>

            {/* Left Button */}
            <motion.button
                className="absolute left-4 bg-white p-3 rounded-full shadow-md text-gray-800 hover:scale-110 transition-all"
                onClick={() => paginate(-1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous Image"
            >
                <FaArrowLeft size={20} />
            </motion.button>

            {/* Right Button */}
            <motion.button
                className="absolute right-4 bg-white p-3 rounded-full shadow-md text-gray-800 hover:scale-110 transition-all"
                onClick={() => paginate(1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next Image"
            >
                <FaArrowRight size={20} />
            </motion.button>
        </div>
    );
};

export default ImageCarousel;

