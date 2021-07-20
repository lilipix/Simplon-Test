import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState();
  const [defaultValue, setDefaultValue] = useState("Search a city...");
  const [isCurrentActive, setIsCurrentActive] = useState(true);
  const [weatherData, setWeatherData] = useState();

  const clickHandler = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    console.log(data);
    setWeatherData({ ...data });

    setInput("");
    // setDefaultValue("sss");
  };

  const something = (event) => {
    if (event.keyCode === 13) {
      clickHandler();
    }
  };

  function degToCompass(num) {
    var val = Math.floor(num / 22.5 + 0.5);
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
  }

  return (
    <div className={styles.wrapper}>
      {weatherData && (
        <div className={styles.weatherWrapper}>
          <h1 className={styles.locationTitle}>
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <p className={styles.weatherDescription}>
            {weatherData.weather[0].description}
          </p>
          <Image
            alt="weatherIcon"
            src={`/icons/${weatherData.weather[0].icon}.svg`}
            height="300px"
            width="300px"
          />

          <h1 className={styles.mainTemp}>
            {Math.round(weatherData.main.temp)}°C
          </h1>
          <p>Feels like {Math.round(weatherData.main.feels_like)}°C</p>

          <p>
            Time:{" "}
            {new Date(
              weatherData.dt * 1000 + weatherData.timezone * 1000
            ).toLocaleString("en-US")}
          </p>
        </div>
      )}
      <div className={styles.statsWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          defaultValue={defaultValue}
          // placeholder="🔍 Search a city ..."
          value={input}
          onFocus={(e) => (e.target.value = "")}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => something(e)}
        />
        {weatherData && (
          <div className={styles.statsBox}>
            <div className={styles.statsCard}>Stats card1</div>
            <div className={styles.statsCard}>Stats card2</div>
            <div className={styles.statsCard}>
              Visibility: {weatherData.visibility / 1000} km
            </div>
            <div className={styles.statsCard}>
              <p>Humidity</p>
              <div className={styles.statsCardContent}>
                <Image
                  alt="weatherIcon"
                  src={`/icons/025-humidity.png`}
                  height="100px"
                  width="100px"
                />
                <div>
                  <h1>{weatherData.main.humidity}</h1>
                  <p>%</p>
                </div>
              </div>
            </div>

            <div className={styles.statsCard}>
              <p>Wind speed</p>
              <div className={styles.statsCardContent}>
                <Image
                  alt="weatherIcon"
                  src={`/icons/017-wind.png`}
                  height="100px"
                  width="100px"
                />
                <div>
                  <h1>{weatherData.wind.speed}</h1>
                  <p>Km/h</p>
                </div>
              </div>
            </div>
            {/* <div className={styles.statsCard}>
              <p>
                Wind:{" "}
                {` ${weatherData.wind.speed} ${degToCompass(
                  weatherData.wind.deg
                )}`}
              </p>
              <Image
                alt="weatherIcon"
                src={`/icons/wind.png`}
                height="100px"
                width="100px"
              />
            </div> */}
            <div className={styles.statsCard}>
              <p>Sunrise</p>
              <div className={styles.statsCardContent}>
                <Image
                  alt="weatherIcon"
                  src={`/icons/040-sunrise.png`}
                  height="100px"
                  width="100px"
                />
                <div>
                  <h1>4:31</h1>
                  <p>AM</p>
                </div>
              </div>

              {/* <p>
                Sunrise:{" "}
                {new Date(
                  weatherData.sys.sunrise * 1000 + weatherData.timezone * 1000
                ).toLocaleString("en-US")}
              </p> */}
              {/* <p>
                Sunset:{" "}
                {new Date(weatherData.sys.sunset * 1000).toLocaleString(
                  "en-US"
                )}
              </p> */}
            </div>
            <div className={styles.statsCard}>
              <p>Sunset</p>
              <div className={styles.statsCardContent}>
                <Image
                  alt="weatherIcon"
                  src={`/icons/041-sunset.png`}
                  height="100px"
                  width="100px"
                />
                <div>
                  <h1>10:02</h1>
                  <p>PM</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
