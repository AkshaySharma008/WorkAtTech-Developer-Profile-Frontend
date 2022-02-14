import React from "react";
import './Header.css';

import HeaderIcon from '../../images/Icons _ Illustrations/undraw_dev_productivity_umsq 1.png';

const Header = () => {
    return (
        <div className="background">
            <div className="flex">
            <div className="header-title">
                The Developer Repository
            </div>
                <img src={HeaderIcon} alt="Header Illustration" className="header-icon"/>
            </div>
           
        </div>
    )
};

export default Header;