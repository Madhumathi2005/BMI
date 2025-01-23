import React, { useState } from "react";
import './App.css';

const SimpleBMICalculator = () => {
  const [height, setHeight] = useState(""); 
  const [weight, setWeight] = useState(""); 
  const [bmi, setBmi] = useState(""); 
  const [classification, setClassification] = useState(""); 

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;  // Convert height to meters
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const result = (w / (h * h)).toFixed(2);  // BMI formula
      setBmi(result);

      // Classify BMI
      if (result < 18.5) {
        setClassification("Underweight");
      } else if (result >= 18.5 && result < 24.9) {
        setClassification("Normal weight");
      } else if (result >= 25 && result < 29.9) {
        setClassification("Overweight");
      } else {
        setClassification("Obese");
      }
    } else {
      setBmi("Invalid input");
      setClassification("");
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input 
        type="number" 
        placeholder="Height (cm)"
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      <br></br>
      <br></br>
      <br></br>
      {bmi && (
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{classification}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleBMICalculator;
