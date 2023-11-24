import React from "react";

const Link = ({ className, href, target, disabled, children, onClick }) => {
    return (
        <a
            className={className}
            disabled={disabled}
            target={target}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

export default Link;
