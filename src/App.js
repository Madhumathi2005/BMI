import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = height / 100; // Convert height to meters
    const calculatedBMI = (weight / (h * h)).toFixed(2);
    setBmi(calculatedBMI);

    if (calculatedBMI < 18.5) setCategory("Underweight");
    else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) setCategory("Normal weight");
    else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  const resetInputs = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={resetInputs} style={{ marginTop: "10px" }}>
        Reset
      </button>

      {bmi && (
        <>
          <h3>Your BMI: {bmi}</h3>
          <h3>Category: {category}</h3>
        </>
      )}

      <h2>BMI Chart</h2>
      <table>
        <thead>
          <tr>
            <th>BMI Range</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 – 24.9</td>
            <td>Normal weight</td>
          </tr>
          <tr>
            <td>25.0 – 29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>30.0 and Above</td>
            <td>Obese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
