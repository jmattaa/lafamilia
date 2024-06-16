import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div className="flex flex-col w-full bg-palette-3 text-white 
                            justify-between py-16 px-8 md:flex-row">
            <div>
                <h1 className="text-3xl font-bold">Kontakta oss:</h1>
                <p className="mt-6 ml-6">
                    Info:{" "}
                    <a className="underline" href="mailto:info@lafamiliam.se">
                        info@lafamiliam.se
                    </a>
                </p>
                <p className="mt-6 ml-6">
                    Boka oss:{" "}
                    <a
                        className="underline"
                        href="mailto:foodtruck@lafamiliam.se">
                        foodtruck@lafamiliam.se
                    </a>
                </p>
            </div>
            <div className="hidden md:flex flex-wrap items-center 
                            justify-center">
                <a
                    href="https://www.facebook.com/profile.php?id=61550994760407"
                    className="text-3xl">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <div className="w-8 h-8"></div>
                <a
                    href="https://www.instagram.com/lafamilia_de_m/"
                    className="text-3xl">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    );
}

export default Contact;
