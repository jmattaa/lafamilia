import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "quesadilla.jpg",
    "foodtruckqeue.jpeg",
];

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: -1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const Carousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = (page + images.length) % images.length;

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative w-full h-96 flex items-center justify-center 
                            overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-between
                                p-4">
                <button
                    className="bg-white rounded-full p-2 shadow"
                    onClick={() => paginate(-1)}
                >
                    &#8592;
                </button>
                <button
                    className="bg-white rounded-full p-2 shadow"
                    onClick={() => paginate(1)}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
