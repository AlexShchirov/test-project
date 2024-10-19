export const TRANSLATION = {
    USER_LIST: {
      en: "User List",
      ru: "Список пользователей",
    },
    USER_NAME: {
      en: "Name",
      ru: "Имя",
    },
    USER_AGE: {
      en: "Age",
      ru: "Возраст",
    },
    USER_CITY: {
      en: "City",
      ru: "Город",
    },
  };
  
  export let currentLanguage = "en"; 
  
  export const getTranslation = (translation: { [key: string]: string }) => {
    return translation[currentLanguage];
  };