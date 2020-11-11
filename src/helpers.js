export const getUTCInMilliSec = (date) => {
  const [year, month, day] = date.split("-");
  const now = new Date();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();
  const milliseconds = now.getUTCMilliseconds();
  // get the time of the new date in milliseconds

  const UTCTime = Date.UTC(
    year,
    month - 1,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );
  console.log(UTCTime);
  return UTCTime;
};
