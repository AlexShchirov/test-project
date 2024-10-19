import React from "react";

interface TextInputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder, onChange, value, className }) => {
  return <input placeholder={placeholder} onChange={onChange} value={value} className={className} />;
};
