import { CityType } from "../types/city";
import { CityLocation, LatAndLon, WeatherInformation } from "../types/weather";
import { getRequest } from "./fetch";
import { formLocationByCityUrl, formWeatherRequest } from "./form-urls";

export const getLocationForCity = (city: CityType): Promise<CityLocation[]> =>
  getRequest(formLocationByCityUrl({ city }));

export const getWeatherInformation = (props: LatAndLon): Promise<WeatherInformation> =>
  getRequest(formWeatherRequest(props));