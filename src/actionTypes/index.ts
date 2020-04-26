import { Species, SpeciesPeople } from "../interfaces";

export const GET_SPECIES_LIST = "GET_SPECIES_LIST";
export interface GetSpeciesList {
  type: typeof GET_SPECIES_LIST;
}

export const SPECIES_RECEIVED = "SPECIES_RECEIVED";
export interface SpeciesReceived {
  type: typeof SPECIES_RECEIVED;
  speciesList: Species[];
}

export const SET_SPECIES = "SET_SPECIES";
export interface SetSpecies {
  type: typeof SET_SPECIES;
  species: Species;
}

export const GET_SPECIES_PEOPLE = "GET_SPECIES_PEOPLE";
export interface GetSpeciesPeople {
  type: typeof GET_SPECIES_PEOPLE;
  peoples: string[];
}

export const SPECIES_PEOPLE_RECEIVED = "SPECIES_PEOPLE_RECEIVED";
export interface SpeciesPeopleReceived {
  type: typeof SPECIES_PEOPLE_RECEIVED;
  peopleList: SpeciesPeople[];
}

export type Action =
  | GetSpeciesList
  | SpeciesReceived
  | SetSpecies
  | GetSpeciesPeople
  | SpeciesPeopleReceived;