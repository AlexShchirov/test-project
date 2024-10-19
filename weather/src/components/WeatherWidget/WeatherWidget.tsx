import React, { useEffect, useState } from "react";
import { useWeatherRequest } from "../../hooks/weather-request";
import { useTranslation } from "../../constants/translations";
import { CITIES } from "../../constants/cities";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { CityType } from "../../types/city";

export const WeatherWidget = () => {
  const { weatherInfo, getWeather, isLoading, error } = useWeatherRequest();
  const [selectedCity, setSelectedCity] = useState<CityType>(CITIES[0]);
  const { t } = useTranslation();

  useEffect(() => {
    getWeather(selectedCity);
  }, [selectedCity, getWeather]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={t("error")} />;
  }

  if (weatherInfo) {
    return (
      <div className="h-screen flex justify-center items-center">
        <WeatherCard
          {...weatherInfo}
          selectedCity={selectedCity}
          onCityChange={(selectedOption) => setSelectedCity(selectedOption.value)}
        />
      </div>
    );
  }

  return null;
};
