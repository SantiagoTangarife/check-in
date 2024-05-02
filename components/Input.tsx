"use client";
import React, { useState } from 'react';

interface TextInputProps {
  placeholderValue: string;
  typeInput: string;
  required?: boolean;
  value?: string; // Define la prop value como requerida
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Define la función onChange como requerida
}

const TextInput: React.FC<TextInputProps> = ({ placeholderValue, typeInput, required, value, onChange, ...rest }) => {

  return (
    <div className="text-input-container">
      <input
        
        type={typeInput}
        value={value}
        onChange={onChange}
        required={required} // Utiliza la prop required para requerir la entrada
        placeholder={placeholderValue} // Utiliza la prop placeholderValue para el placeholder
        className="input-field" // Agrega una clase para los estilos del campo de entrada
        {...rest}
      />
    </div>
  );
};

export default TextInput;
