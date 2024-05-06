export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
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

export const unixToLocalTime = (unixSeconds, timezone) => {
  // let time = new Date((unixSeconds + timezone) * 1000)
  //   .toISOString()
  //   .match(/(\d{2}:\d{2})/)[0];

  // return time.startsWith("0") ? time.substring(1) : time;
  const unixTime = unixSeconds + timezone;
  if (isNaN(unixTime)) {
    throw new Error('Invalid calculated unix time');
  }

  // Créer un objet Date
  const date = new Date(unixTime * 1000);

  // Vérifier que la date est valide
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  // Convertir la date en format ISO
  let time = date.toISOString();

  // Vérifier que la conversion en format ISO a réussi
  if (typeof time !== 'string' || !time.match(/\d{2}:\d{2}/)) {
    throw new Error('Invalid ISO time format');
  }

  // Extraire l'heure de la chaîne ISO
  time = time.match(/(\d{2}:\d{2})/)[0];

  // Retourner l'heure locale
  return time.startsWith("0") ? time.substring(1) : time;
};

