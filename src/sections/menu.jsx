import Reac from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
    return (
        <div
            id="menu-section"
            className="mt-8 p-8 w-full flex flex-col flex-wrap content-center">
            <h1
                className="text-palette-4 text-4xl text-center font-bold">
                Meny
            </h1>

            <hr className="w-full my-8 border-palette-4" />
        </div>
    )
};

export default Menu
