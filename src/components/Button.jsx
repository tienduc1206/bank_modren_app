import React from "react";

const Button = ({ styles, title }) => {
  return (
    <button
      type="button"
      className={`py-4 px-8 ${styles} bg-blue-gradient rounded-[10px]`}
    >
      {title}
    </button>
  );
};

export default Button;
