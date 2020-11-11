import React, { useState } from "react";
import { getUTCInMilliSec } from "./helpers";

const App = () => {
  let [convertedValue, setConvertedValue] = useState("");
  const convertDateToMilleseconds = (e) => {
    const timeInUTC = getUTCInMilliSec(e.target.date.value);
    e.preventDefault();
    setConvertedValue(timeInUTC);
  };
  return (
    <main>
      <form onSubmit={convertDateToMilleseconds}>
        <h1>Convert Dates To MilleSeconds</h1>
        <label>
          <span>Choose a date</span>
          <input type="date" name="date" />
        </label>
        <button>Convert</button>
      </form>
      <p aria-label="the converted value">{convertedValue}</p>
    </main>
  );
};
export default App;
