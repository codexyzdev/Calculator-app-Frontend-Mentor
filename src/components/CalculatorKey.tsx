// src/components/CalculatorKey.tsx
import React from "react";
import { Key } from "../types/types";

interface CalculatorKeyProps {
  value: Key;
  onClick: (value: Key) => void;
}

const CalculatorKey: React.FC<CalculatorKeyProps> = ({ value, onClick }) => {
  return (
    <button data-value={value} className="key" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default CalculatorKey;
