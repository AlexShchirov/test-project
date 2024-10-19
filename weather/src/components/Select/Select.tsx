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
  placeholder: string;
  className: string;
}

export const Select = ({ options, value, onChange, placeholder, className }: SelectProps) => {
  return (
    <select
      className={className}
      value={value.label}
      onChange={(e) => {
        const selectedOption = options.find((option) => option.label === e.target.value);
        if (selectedOption) {
          onChange(selectedOption);
        }
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
