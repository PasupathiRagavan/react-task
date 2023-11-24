import React from "react";

const Button = ({ text, className, children, disabled, onClick }) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className={className}
            onClick={onClick}
        >
            {children}
            {text}
        </button>
    );
};

export default Button;
