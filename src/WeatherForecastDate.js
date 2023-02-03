import React from "react";
import Weather from "./Weather";

export default function WeatherForecastDate(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
}
