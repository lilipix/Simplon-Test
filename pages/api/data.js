import cityWeatherConfig from "../../public/cityWeatherConfig";

export default async function handler(req, res) {
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${cityWeatherConfig.latitude}&longitude=${cityWeatherConfig.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=sunrise,sunset&timeformat=unixtime&timezone=auto&forecast_days=1`,
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
