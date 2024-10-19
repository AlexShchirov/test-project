import React, { useEffect, useState } from "react";
import { useWeatherRequest } from "../../hooks/weather-request";
import { useTranslation } from "../../constans/translations";
import { CITIES } from "../../constans/cities";
import { Select } from "../Select/Select";
import { Card, Spinner } from "flowbite-react";
import { FaTemperatureHigh, FaTint, FaWind, FaCloud } from "react-icons/fa";

export const WeatherWidget = () => {
  const { weatherInfo, getWeather, isLoading, error } = useWeatherRequest();
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const { t } = useTranslation();

  useEffect(() => {
    getWeather(selectedCity);
  }, [selectedCity, getWeather]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner aria-label="Loading" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-red-500">{t("error")}</p>
      </div>
    );
  }

  if (weatherInfo) {
    const { name, main,  wind, clouds } = weatherInfo;
    const temperature = main.temp;
    const humidity = main.humidity;
    const windSpeed = wind.speed;
    const cloudiness = clouds.all;

    return (
      <div className="h-screen flex justify-center items-center">
        <Card className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">{name}</h3>
          <div className="mt-4">
            <p className="text-lg font-semibold flex items-center">
              <FaTemperatureHigh className="mr-2" />
              {t("temperature")}: {Math.round(temperature - 273.15)}°C
            </p>
            <p className="text-lg font-semibold flex items-center">
              <FaTint className="mr-2" />
              {t("humidity")}: {humidity}%
            </p>
            <p className="text-lg font-semibold flex items-center">
              <FaWind className="mr-2" />
              {t("windSpeed")}: {windSpeed} m/s
            </p>
            <p className="text-lg font-semibold flex items-center">
              <FaCloud className="mr-2" />
              {t("cloudiness")}: {cloudiness}%
            </p>
          </div>
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
        </Card>
      </div>
    );
  }

  return null;
};