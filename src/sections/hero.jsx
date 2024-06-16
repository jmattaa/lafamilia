import React from 'react';

function Hero({ title, description, image, cta_text, cta_redirect }) {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center p-4 
                            h-screen w-full">
                <h1 className="text-white text-5xl m-4 font-semibold">
                    {title}
                </h1>
                <p className="text-gray-200 text-md m-4">{description}</p>
                <a
                    className="m-4 p-2 rounded-sm transition-all bg-palette-1/75
                                duration-200 hover:bg-palette-1/90"
                    href={cta_redirect}
                >{cta_text}</a>

                <img className="-z-50 absolute top-0 left-0 w-full h-inherit
                    object-cover brightness-50" src={image} alt={image} />
                <div className="-z-50 absolute top-0 left-0 w-full h-inherit 
                    object-cover brightness-50"></div>
            </div>
        </div>
    );
}

export default Hero;
