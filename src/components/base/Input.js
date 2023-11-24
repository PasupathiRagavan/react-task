import React from "react";

const Input = ({
    name,
    inputClassName,
    id,
    placeholder,
    type,
    onChange,
    onBlur,
    value,
    required
}) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            id={id}
            className={inputClassName}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
        />
    );
};

export default Input;
