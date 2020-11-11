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
      <h1>Convert Dates To MilliSeconds</h1>
      <form onSubmit={convertDateToMilleseconds}>
        <label htmlFor="date-input">Choose a date</label>
        <input type="date" name="date" id="date-input" />
        <button>Convert</button>
      </form>
      <p aria-label="the converted value">{convertedValue}</p>
    </main>
  );
};
export default App;
