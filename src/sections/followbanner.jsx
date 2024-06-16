import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function FollowBanner() {
    return (
        <div
            className="flex flex-col content-center bg-palette-3 p-16
                        flex-wrap text-white">
            <h1 className="text-3xl font-extrabold">Följ Oss!</h1>
            <div className="flex flex-wrap justify-center">
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
    )
};

export default FollowBanner;
