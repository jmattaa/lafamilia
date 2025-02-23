import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
    const [menuState, setMenuState] = useState(false);

    const toggleBurger = () => {
        setMenuState(!menuState); // toggle menu
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMenuState(false); // close menu after clicking a link
    };


    const navLinks = [
        ["Catering", "catering-section"],
        ["Om Oss", "about-section"],
    ];

    const navContent = (
        <>
            {navLinks.map(([title, id], i) => (
                <motion.a
                    key={i}
                    className="relative text-white 
                                after:content-['']
                                after:flex after:absolute
                                after:bottom-0 after:left-0 
                                after:w-full after:h-[.1em] 
                                after:bg-white after:opacity-0 
                                after:scale-x-0 after:origin-left
                                after:transition-[opacity,transform]
                                after:duration-300 
                                hover:after:opacity-100
                                hover:after:scale-x-[1]"
                    onClick={() => scrollToSection(id)}
                    initial={{ translateY: "5vh", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: (i + 1) * .15 }}>
                    {title}
                </motion.a>
            ))}
            <motion.a
                href="#"
                className="link">
                <motion.button
                    className="px-6 py-2 border rounded text-white 
                                bg-palette-4 border-palette-4"
                    initial={{ translateY: "5vh", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: (navLinks.length + .6) * .15 }}>
                    Kontakta Oss
                </motion.button>
            </motion.a>
        </>
    );

    return (
        <motion.nav
            className="flex items-center justify-center fixed z-50 w-full mt-0 
                            lg:shadow-none"
            initial={{ translateY: "-50vh", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
                duration: .255,
                type: "spring",
                stiffness: 250,
                damping: 20,
            }}>
            <div
                className="flex items-center justify-between w-full px-3 py-6 
                            bg-black/40 backdrop-blur-sm">
                <motion.div
                    className="text-lg font-extrabold text-white"
                    initial={{ translateY: "-5vh", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: .244 }} >
                    <a href="/">La Familia</a>
                </motion.div>

                <div
                    className="hidden space-x-12 items-center lg:flex">
                    {navContent}
                </div>

                <button className="lg:hidden" onClick={toggleBurger}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8H13.75M5 12H19M10.25 16L19 16"
                            stroke="#fff"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
            <div className={`
                        flex flex-col items-center justify-center
                        fixed top-0 left-0 w-screen
                        bg-black/80 transition-[height,opacity] duration-200
                        backdrop-blur-xl
                        ${menuState ?
                    "flex !h-screen opacity-100" :
                    "opacity-0 h-0 pointer-events-none"
                }`}
                onClick={toggleBurger}>
                <div className="w-full h-full top-0 left-0 flex flex-col 
                                        items-center 
                                        justify-center [&>*]:my-6">
                    {navContent}
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar;

