import Reac from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as data from "../data/meny";

const Menu = () => {
    return (
        <div
            id="menu-section"
            className="mt-8 p-8 w-full flex flex-col flex-wrap content-center">
            <h1
                className="text-palette-4 text-4xl text-center font-bold">
                Meny
            </h1>

            <div className="p-8 bg-palette-3 text-yellow font-artistamp">
                {data.rullar.map((rulle, i) => (
                    <div key={i} className="grid grid-cols-2 py-8">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold">{rulle.name}</h2>
                            <p>
                                ({rulle.contents})
                            </p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p>{rulle.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="w-full my-8 border-palette-4" />
        </div>
    )
};

export default Menu
