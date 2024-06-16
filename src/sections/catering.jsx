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
                <p className="mt-10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className="w-full flex content-center justify-center flex-wrap 
                            pt-8 lg:justify-end lg:w-1/2">
                <div className="w-full lg:w-2/3">
                    <img src="quesadilla.jpg" alt="quesadilla" />
                </div>
            </div>
        </div>
    );
}

export default Catering;
