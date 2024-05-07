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
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

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
  return weekday[new Date(weatherData.current.time * 1000).getUTCDay()];
};

export const getIcon = (iconName) => {
  if (iconName === 0) return "/icons/01d.svg";
  if (iconName === 1 || iconName === 2 || iconName === 3)
    return "/icons/02d.svg";
  if (iconName === "45" || iconName === "48") return "/icons/50d.svg";
  if (
    iconName === 51 ||
    iconName === 53 ||
    iconName === 55 ||
    iconName === 56 ||
    iconName === 57
  )
    return "/icons/09d.svg";
  if (iconName === 61 || iconName === 63 || iconName === 65)
    return "/icons/10d.svg";
  if (iconName === 66 || iconName === 67) return "/icons/13d.svg";
  if (
    iconName === 71 ||
    iconName === 73 ||
    iconName === 75 ||
    iconName === 77 ||
    iconName === 85 ||
    iconName === 86
  )
    return "/icons/13d.svg";
  if (iconName === 80 || iconName === 81 || iconName === 82)
    return "/icons/09d.svg";
  if (iconName === 95 || iconName === 96 || iconName === 99)
    return "/icons/11d.svg";
};

export const getVisibilityData = (unitSystem, timeData, visibilityData) => {
  if (timeData.length !== visibilityData.length) return;
  const lastIndex = visibilityData.length - 1;
  const lastVisibility = visibilityData[lastIndex];

  const convertedVisibility = getVisibility(unitSystem, lastVisibility);
  
  return {
    convertedVisibility,
  }
}