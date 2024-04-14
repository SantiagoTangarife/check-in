"use client";
import React, { useState } from 'react';

const TextInput = ({ placeholderValue }: { placeholderValue: string }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholderValue} // Utiliza la prop placeholderValue para el placeholder
        className="input-field" // Agrega una clase para los estilos del campo de entrada
      />
    </div>
  );
};

export default TextInput;
