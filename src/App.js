import React, { useState } from "react";
import { getUTCInMilliSec } from "./helpers";

const App = () => {
  let [dateInMilliSec, setDateInMilliSec] = useState("");
  let [isCopyDate, setIsCopyDate] = useState(false);
  const convertDateToMilleseconds = (e) => {
    const timeInUTC = getUTCInMilliSec(e.target.date.value);
    e.preventDefault();
    setDateInMilliSec(timeInUTC);
    setIsCopyDate(true);
  };
  const handleCopyDate = () => {
    const copyDate = document.getElementById("date-in-milli-sec").innerHTML;
    navigator.clipboard.writeText(copyDate);
  };
  return (
    <main>
      <h1>Convert Dates To MilliSeconds</h1>
      <form onSubmit={convertDateToMilleseconds}>
        <label htmlFor="date-input">Choose a date</label>
        <input type="date" name="date" id="date-input" />
        <button>Convert</button>
      </form>
      <div>
        <span id="date-in-milli-sec" aria-label="date in milliseconds">
          {dateInMilliSec}
        </span>
        {isCopyDate && <button onClick={handleCopyDate}>Copy</button>}
      </div>
    </main>
  );
};
export default App;
