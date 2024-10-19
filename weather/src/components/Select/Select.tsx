import React from "react";
import { CityType } from "../../types/city";

interface Option {
  value: CityType;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: Option;
  onChange: (selectedOption: Option) => void;
  placeholder?: string;
  className?: string;
}

export const Select = ({ options, value, onChange, placeholder, className }: SelectProps) => {
  return (
    <select
      value={value.label}
      onChange={(e) => {
        const selected = options.find(option => option.label === e.target.value);
        if (selected) {
          onChange(selected);
        }
      }}
      className={`${className} w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
};