import { useCallback, useState } from "react";
import { CityType } from "../types/city";
import { CityLocation, WeatherInformation } from "../types/weather";
import { getLocationForCity, getWeatherInformation } from "../utils/weather-requests";
import { useLoader } from "./loader";

export const useWeatherRequest = () => {
  const { isLoading, error, setLoading, setError } = useLoader();
  const [weatherInfo, setWeatherInfo] = useState<WeatherInformation | null>(null);

  const getWeather = useCallback(async (city: CityType) => {
    setLoading(true);
    setError(null);
    try {
      const locations: CityLocation[] = await getLocationForCity(city);

      const currentLocation = locations[0];

      const result = await getWeatherInformation(currentLocation);

      setWeatherInfo(result);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
      setLoading(false);
    }
  }, []);

  return {
    getWeather,
    isLoading,
    error,
    weatherInfo,
  };
};
