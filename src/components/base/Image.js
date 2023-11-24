import React from "react";

const Image = ({ src, className, alt = "", onClick, title }) => {
    return (
        <img
            src={src}
            className={className}
            alt={alt}
            onClick={onClick}
            title={title}
        />
    );
};

export default Image;
