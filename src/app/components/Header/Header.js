import React from "react";
import constants from "../../data/constants";

import "./Header.scss";

const Header = () => (
    <header>
        <div className="row">
            <figure>
                <img src="https://pbs.twimg.com/profile_images/560893232649760768/zDGzF6FM.png" alt="Logo" />
            </figure>
            <h1>{constants.header.TITLE}</h1>
        </div>
    </header>
);

export default Header;
