// src/components/Calculator.tsx
import React, { useState } from "react";
import { Key } from "../types/types";
import CalculatorKey from "./CalculatorKey";
import "./Calculator.css";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [theme, setTheme] = useState<number>(1);

  const changeTheme = (e: any) => {
    setTheme(e.target.value);
  };

  const handleKeyClick = (key: Key) => {
    if (key === "RESET") {
      setDisplayValue("0");
    } else if (key === "DEL") {
      setDisplayValue((prev) => prev.slice(0, -1) || "0");
    } else if (key === "=") {
      try {
        // Evaluar la expresión (¡cuidado con eval! Considera usar una biblioteca de análisis seguro)
        setDisplayValue(String(eval(displayValue.replace("x", "*"))));
      } catch (error) {
        setDisplayValue("Error");
      }
    } else {
      setDisplayValue((prev) => (prev === "0" ? key : prev + key));
    }
  };

  const keys: Key[] = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];

  return (
    <section data-theme={theme}>
      <main>
        <header>
          <p>calc</p>
          <div className='switch'>
            <div className='switch__numbers'>
              <span className='switch__number'>1</span>
              <span className='switch__number'>2</span>
              <span className='switch__number'>3</span>
            </div>
            <p className='switch__name'>THEME</p>
            <input
              onChange={changeTheme}
              type='range'
              min={1}
              max={3}
              step={1}
              defaultValue={1}
            />
          </div>
        </header>
        <div className='display'>{displayValue}</div>
        <div className='keypad'>
          {keys.map((key) => (
            <CalculatorKey key={key} value={key} onClick={handleKeyClick} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Calculator;
