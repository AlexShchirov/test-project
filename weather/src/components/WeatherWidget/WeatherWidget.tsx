import React, { useEffect, useState } from "react";
import { useWeatherRequest } from "../../hooks/weather-request";
import { useTranslation } from "../../constants/translations";
import { CITIES } from "../../constants/cities";
import { Loader } from "../Loader";
import { Error } from "../Error";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { CityType } from "../../types/city";
import { Select } from "../Select/Select";

export const WeatherWidget = () => {
  const { weatherInfo, getWeather, isLoading, error } = useWeatherRequest();
  const [selectedCity, setSelectedCity] = useState<CityType>(CITIES[0]);
  const { t } = useTranslation();

  useEffect(() => {
    getWeather(selectedCity);
  }, [selectedCity, getWeather]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg shadow-md">
        <Select
          options={CITIES.map((city) => ({
            value: city,
            label: `${city.city}, ${city.code}`,
          }))}
          value={{ value: selectedCity, label: `${selectedCity.city}, ${selectedCity.code}` }}
          onChange={(selectedOption) => setSelectedCity(selectedOption.value)}
          placeholder={t("selectCity")}
          className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={t("error")} />
        ) : weatherInfo ? (
          <WeatherCard {...weatherInfo} />
        ) : null}
      </div>
    </div>
  );
};
