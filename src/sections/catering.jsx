import React from "react";

function Catering() {
    return (
        <div
            id="catering-section"
            className="w-full flex flex-col-reverse px-8 py-8 content-center 
                        flex-wrap lg:flex-row lg:px-20">
            <div className="pt-8 w-full lg:w-1/2">
                <h1
                    className="text-palette-4 text-4xl text-center font-bold">
                    Catering
                </h1>
                <p className="mt-10">La Familia erbjuder flexibel catering som
                    passar alla tillfällen och smaker! Oavsett om du planerar en
                    företagsevent, ett bröllop eller en fest, kan vi skräddarsy
                    en meny som passar just dina gästers behov. Vi erbjuder både
                    vegetariska, veganska och kycklingalternativ, med inspiration
                    från tex mex och mellanöstern – allt tillagat med färska,
                    smakrika ingredienser. Låt oss ta hand om maten och skapa en
                    minnesvärd upplevelse för ditt event, med en meny som kan
                    anpassas efter dina önskemål och preferenser.</p>
            </div>

            <div className="w-full flex content-center justify-center flex-wrap 
                            pt-8 lg:justify-end lg:w-1/2">
                <div className="w-full lg:w-2/3">
                    <img src="foodtruckqeue.jpeg" alt="foodtruck" />
                </div>
            </div>
        </div>
    );
}

export default Catering;
