import React from "react";

function About() {
    return (
        <div 
            id="about-section"
            className="mt-8 p-8 w-full flex flex-col flex-wrap content-center">
            <h1 className="text-palette-4 text-4xl font-bold text-center">
                Om oss
            </h1>
            <p className="p-8 lg:px-20">
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
    );
}

export default About;
