export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    `https://api.open-meteo.com/v1/forecast?latitude=45.7485&longitude=4.8467&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain,visibility,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timeformat=unixtime&timezone=Europe%2FBerlin&forecast_days=1`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
