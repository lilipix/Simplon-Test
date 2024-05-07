import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";
import cityWeatherConfig from "../public/cityWeatherConfig.json";

import styles from "../styles/Home.module.css";

export const App = () => {
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  console.log(weatherData);
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    const fetchData = async () => {
      try{
      const res = await fetch("api/data");
      const data = await res.json();
      setWeatherData({ ...data });
    } catch (error) {
      console.error("Erreur dans la récupération des données météorologiques",error);
    }
  };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={cityWeatherConfig.city}
        country={cityWeatherConfig.country}
        description={weatherData.current.weather_code}
        iconName={weatherData.current.weather_code}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
      <Search
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
