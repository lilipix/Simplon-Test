import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    // ? (visibilityInMeters / 1000).toFixed(1)
    // : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime) =>
  unitSystem == "metric"
    ? unixToLocalTime(currentTime)
    : timeTo12HourFormat(unixToLocalTime(currentTime));

export const getAMPM = (unitSystem, currentTime) =>
  unitSystem === "imperial"
    ? unixToLocalTime(currentTime).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((weatherData.current.time ) * 1000).getUTCDay()
  ];
};
