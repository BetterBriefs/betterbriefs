<<<<<<< Updated upstream:src/components/select/Select.js
import React, { useState } from "react";
import "./Select.css";

export const Select = ({ setDifficulty }) => {
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
};
=======
import React from "react";
import "./Select.css";

export const Select = ({ setDifficulty }) => {
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
};
>>>>>>> Stashed changes:src/components/atoms/select/Select.js
