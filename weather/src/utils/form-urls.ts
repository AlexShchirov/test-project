import { CityType } from "../types/city";
import { LatAndLon } from "../types/weather";

type FormLocationByCityUrl = {
  city: CityType;
  limit?: number;
};

export const formLocationByCityUrl = ({
  city,
  limit = 1,
}: FormLocationByCityUrl) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city.city},${city.code}&limit=${limit}&appid=${process.env.WEATHER_API}`;

export const formWeatherRequest = ({ lat, lon }: LatAndLon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`;