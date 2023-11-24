import React from "react";

const CustomText = ({
    as: CustomTag = "p",
    label,
    className,
    children,
    htmlFor
}) => {
    return (
        <CustomTag htmlFor={htmlFor} className={className}>
            {label}
            {children}
        </CustomTag>
    );
};

export default CustomText;
