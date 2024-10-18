import React from 'react';

interface TextInputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, onChange, value, className }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
};

export default TextInput;