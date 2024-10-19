export enum COUNTRY_CODE {
    GB = 'GB',
    BY = 'BY',
    DE = 'DE',
    FR = 'FR'
  }
  
  export enum CITY {
    LONDON ="London", 
    BERLIN ="Berlin", 
    MINSK = "Minsk", 
    VITEBSK = "Vitebsk", 
    BREST = "Brest",
    PARIS = 'Paris'
  }
  
  export type CityType = {
    code: COUNTRY_CODE;
    city: string;
  }