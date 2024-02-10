import { ICity, ICountry } from "../types/types.ts";

export const countriesData: ICountry[] = [
  {
    id: 1,
    name: "UK",
    description: "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe",
  },
  {
    id: 2,
    name: "France",
    description: "France, officially the French Republic, is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories",
  },
  {
    id: 3,
    name: "Spain",
    description: "Spain, officially the Kingdom of Spain, is a sovereign state located on the Iberian Peninsula in southwestern Europe.",
  },
  {
    id: 4,
    name: "Germany",
    description: "Germany, officially the Federal Republic of Germany, is a federal parliamentary republic in western - central Europe.",
  },
];

export const citiesData: ICity[] = [
  {
    "id": 1,
    "country_id": 1,
    "title": "London",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  },
  {
    "id": 2,
    "country_id": 1,
    "title": "Liverpool",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  },
  {
    "id": 3,
    "country_id": 2,
    "title": "Paris",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  },
  {
    "id": 4,
    "country_id": 3,
    "title": "Madrid",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  },
  {
    "id": 5,
    "country_id": 4,
    "title": "Berlin",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  },
  {
    "id": 6,
    "country_id": 4,
    "title": "Munich",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  },
  {
    "id": 7,
    "country_id": 4,
    "title": "Hamburg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure reiciendis sed voluptatibus? Consequuntur, deleniti dolores error est, expedita, facilis incidunt iure nam obcaecati odio quidem quis saepe sed veritatis!",
  }];
