import * as data from "../data/meny.ts";
import { motion } from "framer-motion";

const Menu = () => {
    return (
        <div
            id="menu-section"
            className="mt-8 mb-20 lg:p-8 w-screen">
            <h1
                className="text-palette-4 text-4xl text-center font-bold mb-8">
                Meny
            </h1>

            <div className="lg:mt-8 p-8 bg-palette-3 text-yellow rounded-t-3xl 
                            lg:rounded-3xl">
                <h1 className="text-center text-3xl lg:text-4xl font-artistamp">RULLAR</h1>
                {data.rullar.map((rulle, i) => (
                    <motion.div
                        key={i}
                        viewport={{ once: false, amount: .2 }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .4,
                                staggerChildren: .8,
                                delay: i * .13,
                            }
                        }}
                        className="grid grid-cols-2 py-3 lg:py-8">
                        <div className="flex flex-col">
                            <h2 className="text-lg lg:text-3xl font-artistamp">
                                {rulle.name} RULLE
                            </h2>
                            <p className="text-sm lg:text-xl">
                                ({rulle.contents})
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-lg">
                            <p>{rulle.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="lg:mt-8 p-8 bg-green text-yellow lg:rounded-3xl">
                <h1 className="text-center text-3xl lg:text-4xl font-artistamp">TALLRIKAR</h1>
                {data.tallrikar.map((tallrik, i) => (
                    <motion.div
                        key={i}
                        viewport={{ once: false, amount: .2 }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .4,
                                staggerChildren: .8,
                                delay: i * .13,
                            }
                        }}
                        className="grid grid-cols-2 py-3 lg:py-8">
                        <div className="flex flex-col">
                            <h2 className="text-lg lg:text-3xl font-artistamp">
                                {tallrik.name} TALLRIK
                            </h2>
                            <p className="text-sm lg:text-xl">
                                ({tallrik.contents})
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-lg">
                            <p>{tallrik.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="lg:mt-8 p-8 bg-yellowish text-white lg:rounded-3xl">
                <h1 className="text-center text-3xl lg:text-4xl font-artistamp">BARNMENY</h1>
                {data.barnmeny.map((barn, i) => (
                    <motion.div
                        key={i}
                        viewport={{ once: false, amount: .2 }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .4,
                                staggerChildren: .8,
                                delay: i * .13,
                            }
                        }}
                        className="grid grid-cols-2 py-3 lg:py-8">
                        <div className="flex flex-col">
                            <h2 className="text-lg lg:text-3xl font-artistamp">
                                {barn.name}
                            </h2>
                            <p className="text-sm lg:text-xl">
                                ({barn.contents})
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-lg">
                            <p>{barn.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>


            <div className="lg:mt-8 p-8 bg-orangeish text-white rounded-b-3xl
                            lg:rounded-3xl">
                <h1 className="text-center text-3xl lg:text-4xl font-artistamp">SNACKS</h1>
                {data.snacks.map((snack, i) => (
                    <motion.div
                        key={i}
                        viewport={{ once: false, amount: .2 }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .4,
                                staggerChildren: .8,
                                delay: i * .13,
                            }
                        }}
                        className="grid grid-cols-2 py-3 lg:py-8">
                        <div className="flex flex-col">
                            <h2 className="text-lg lg:text-3xl font-artistamp">
                                {snack.name}
                            </h2>
                            <p className="text-sm lg:text-xl">
                                ({snack.contents})
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-lg">
                            <p>{snack.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
};

export default Menu
