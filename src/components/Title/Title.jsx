import React from "react";

import './Title.css';

const Title = ({titleText}) => {
    return (
        <div className="title">
            {titleText}
        </div>
    )
};


export default Title;