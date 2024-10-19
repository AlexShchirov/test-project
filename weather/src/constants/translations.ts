import { useState } from "react";

type TranslationKeys = "loading" | "error" | "selectCity" | "temperature" | "humidity" | "windSpeed" | "cloudiness";

type Translations = {
  [key in TranslationKeys]: string;
};

type TranslationObject = {
  en: Translations;
  ru: Translations;
};

export const translations = {
  en: {
    loading: "Loading...",
    error: "Error",
    selectCity: "Select a city",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "Wind Speed",
    cloudiness: "Cloudiness",
  },
  ru: {
    loading: "Загрузка...",
    error: "Ошибка",
    selectCity: "Выберите город",
    temperature: "Температура",
    humidity: "Влажность",
    windSpeed: "Скорость ветра",
    cloudiness: "Облачность",
  },
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<keyof TranslationObject>("en");

  const t = (key: TranslationKeys) => translations[language][key];

  return { t, setLanguage };
};
