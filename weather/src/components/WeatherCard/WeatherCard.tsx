import React from "react";
import { Card } from "flowbite-react";
import { FaTemperatureHigh, FaTint, FaWind, FaCloud } from "react-icons/fa";
import { Select } from "../Select/Select";
import { CITIES } from "../../constants/cities";
import { useTranslation } from "../../constants/translations";
import { CityType } from "../../types/city";

interface WeatherCardProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  selectedCity: CityType;
  onCityChange: (selectedOption: { value: CityType; label: string }) => void;
}

export const WeatherCard = ({ name, main, wind, clouds, selectedCity, onCityChange }: WeatherCardProps) => {
  const { t } = useTranslation();
  const temperature = main.temp;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const cloudiness = clouds.all;

  return (
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
        onChange={onCityChange}
        placeholder={t("selectCity")}
        className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Card>
  );
};
