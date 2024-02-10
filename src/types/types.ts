export interface ICity {
  id: string | number;
  country_id: string | number;
  title: string;
  description: string;
}

export interface ICountry {
  id: string | number;
  name: string;
  description: string;
}
