import React from "react";
import styles from "./Button.module.css";

function CustomButton({ children, onClick, className = "primary", size = "md", type = "button", ...rest }) {
  const isSizeValid = ["sm", "md", "lg"].includes(size);
  const variantClass = styles[className] || styles.primary;
  const sizeClass = isSizeValid ? styles[size] : "";

  const combinedClassName = `${styles.base} ${variantClass} ${sizeClass}`.trim();

  return (
    <button type={type} onClick={onClick} className={combinedClassName} {...rest}>
      {children}
    </button>
  );
}

export default CustomButton;
