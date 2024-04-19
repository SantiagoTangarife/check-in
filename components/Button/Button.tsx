import React from 'react';

interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button
      className={`${
        type === 'primary' ? 'bg-blue-500 px-8 py-2 font-bold' : 'bg-gray-500 px-3 py-2 font-semibold'
      } rounded-full hover:scale-105`}
    >
      <span className="text-md text-black">{text}</span>
    </button>
  );
};

export default Button;