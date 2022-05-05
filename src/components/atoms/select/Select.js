import React from "react";
import "./Select.css";

function Select({ setDifficulty }) {
  return (
    <select
      name="difficulty"
      id="difficulty"
      defaultValue="simple"
      onChange={(e) => setDifficulty(e.target.value)}
    >
      <option value="easy">Easy</option>
      <option value="normal">Normal</option>
      <option value="advanced">Advanced</option>
    </select>
  );
}

export default React.memo(Select);
