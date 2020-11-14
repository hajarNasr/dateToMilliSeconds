export const getUTCInMilliSec = (date) => {
  const [year, month, day] = date.split("-");
  const now = new Date();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();
  const milliseconds = now.getUTCMilliseconds();

  const UTCTime = Date.UTC(
    year,
    month - 1,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );
  if (!UTCTime) {
    alert("Please enter a valid date");
    return;
  }

  const offset = new Date().getTimezoneOffset() * 60000;
  return UTCTime + offset;
};
