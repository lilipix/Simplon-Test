export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const codeToDescription = (code) => {
  const codes = {
    0: "Ciel clair",
    1: "Généralement clair, partiellement nuageux et couvert",
    2: "Généralement clair, partiellement nuageux et couvert",
    3: "Généralement clair, partiellement nuageux et couvert",
    45: "Brouillard et dépôt de brouillard givre",
    48: "Brouillard et dépôt de brouillard givre",
    51: "Bruine : intensité légère, modérée et dense",
    53: "Bruine : intensité légère, modérée et dense",
    55: "Bruine : intensité légère, modérée et dense",
    56: "Bruine verglaçante : Intensité légère et dense",
    57: "Bruine verglaçante : Intensité légère et dense",
    61: "Pluie : intensité légère, modérée et forte",
    63: "Pluie : intensité légère, modérée et forte",
    65: "Pluie : intensité légère, modérée et forte",
    66: "Pluie verglaçante : intensité légère et forte",
    67: "Pluie verglaçante : intensité légère et forte",
    71: "Chutes de neige : intensité légère, modérée et forte",
    73: "Chutes de neige : intensité légère, modérée et forte",
    75: "Chutes de neige : intensité légère, modérée et forte",
    77: "Grains de neige",
    80: "Averses de pluie : légères, modérées et violentes",
    81: "Averses de pluie : légères, modérées et violentes",
    82: "Averses de pluie : légères, modérées et violentes",
    85: "Averses de neige légères et fortes",
    86: "Averses de neige légères et fortes",
    95: "Orage : léger ou modéré",
    96: "Orage avec grêle faible et forte",
    99: "Orage avec grêle faible et forte",
  };
  return codes[code] || "Description non disponible";
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (unixSeconds) => {

  const date = new Date(unixSeconds * 1000); 
  const hours = date.getHours().toString().padStart(2, '0'); 
  const minutes = date.getMinutes().toString().padStart(2, '0'); 
  return `${hours}:${minutes}`;

  // let time = new Date(unixSeconds * 1000)
  //   .toISOString()
  //   .match(/(\d{2}:\d{2})/)[0];

  // return time.startsWith("0") ? time.substring(1) : time;
};
