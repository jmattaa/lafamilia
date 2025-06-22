import * as data from "../data/meny.ts";

const Menu = () => {
    return (
        <div
            id="menu-section"
            className="mt-8 p-8 w-full flex flex-col flex-wrap content-center">
            <h1
                className="text-palette-4 text-4xl text-center font-bold">
                Meny
            </h1>

            <div className="mt-8 p-8 bg-palette-3 text-yellow">
                <h1 className="text-center text-2xl font-artistamp">RULLAR</h1>
                {data.rullar.map((rulle, i) => (
                    <div key={i} className="grid grid-cols-2 py-3 lg:py-8">
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
                    </div>
                ))}
            </div>

            <div className="mt-8 p-8 bg-green text-yellow">
                <h1 className="text-center text-2xl font-artistamp">TALLRIKAR</h1>
                {data.tallrikar.map((tallrik, i) => (
                    <div key={i} className="grid grid-cols-2 py-3 lg:py-8">
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
                    </div>
                ))}
            </div>

            <div className="mt-8 p-8 bg-orangeish text-white">
                <h1 className="text-center text-2xl font-artistamp">SNACKS</h1>
                {data.snacks.map((snack, i) => (
                    <div key={i} className="grid grid-cols-2 py-3 lg:py-8">
                        <div className="flex flex-col">
                            <h2 className="text-lg lg:text-3xl font-artistamp">
                                {snack.name} SNACK
                            </h2>
                            <p className="text-sm lg:text-xl">
                                ({snack.contents})
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-lg">
                            <p>{snack.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-8 bg-yellowish text-white">
                <h1 className="text-center text-2xl font-artistamp">BARNMENY</h1>
                {data.barnmeny.map((barn, i) => (
                    <div key={i} className="grid grid-cols-2 py-3 lg:py-8">
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
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Menu
