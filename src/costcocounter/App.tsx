import { useState, useEffect } from "react";

function Counter({
    name,
    price,
    quantity,
    onQuantityChange,
}: {
    name: string;
    price: number;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
}) {
    const increment = () => onQuantityChange(quantity + 1);
    const decrement = () => {
        if (quantity === 0) return;
        onQuantityChange(quantity - 1);
    };

    return (
        <div
            className="flex flex-col items-center justify-center border 
                        rounded-lg p-6 shadow-md bg-white w-full mb-6">
            <h1 className="text-2xl font-semibold mb-2">{name}</h1>
            <p className="text-lg mb-2">Pris: {price} kr</p>
            <p className="text-lg mb-4">Antal: {quantity}</p>
            <div className="flex space-x-4">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold 
                                py-2 px-4 rounded disabled:opacity-50"
                    onClick={decrement}
                    disabled={quantity === 0}>
                    -
                </button>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white 
                                font-bold py-2 px-4 rounded"
                    onClick={increment}>
                    +
                </button>
            </div>
        </div>
    );
}

function App() {
    const items = [
        { name: "tenders", price: 125 },
        { name: "quesadilla", price: 125 },
        { name: "falafel", price: 99 },
        { name: "cheese fries", price: 54 },
        { name: "nacho guacamole", price: 54 },
        { name: "nacho supremo", price: 54 },
    ];

    // Load quantities from localStorage or initialize to zeros
    const [quantities, setQuantities] = useState<number[]>(() => {
        const stored = localStorage.getItem("quantities");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length === items.length) {
                    return parsed;
                }
            } catch {
                // invalid JSON, ignore
            }
        }
        return items.map(() => 0);
    });

    // Save to localStorage whenever quantities change
    useEffect(() => {
        localStorage.setItem("quantities", JSON.stringify(quantities));
    }, [quantities]);

    const handleQuantityChange = (index: number, quantity: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] = quantity;
        setQuantities(newQuantities);
    };

    const totalPrice = items.reduce(
        (sum, item, idx) => sum + item.price * quantities[idx],
        0
    );

    return (
        <div
            className="min-h-screen bg-gray-100 flex flex-col items-center 
                        justify-start py-10 px-4">
            <h2 className="text-3xl font-bold mb-8">Beställning</h2>
            <div
                className="grid grid-cols-2 gap-6 items-center 
                            justify-center"
            >
                {items.map((item, idx) => (
                    <Counter
                        key={idx}
                        name={item.name}
                        price={item.price}
                        quantity={quantities[idx]}
                        onQuantityChange={(qty) =>
                            handleQuantityChange(idx, qty)}
                    />
                ))}
            </div>
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-64 
                            text-center">
                <p className="text-xl font-semibold">
                    Totalpris: {totalPrice} kr
                </p>
            </div>
        </div>
    );
}

export default App;

