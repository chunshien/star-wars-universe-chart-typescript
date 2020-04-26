import * as actions from "../actionTypes";
import { Species, SpeciesPeople } from "../interfaces";
export function getSpeciesList(): actions.GetSpeciesList {
  return {
    type: actions.GET_SPECIES_LIST
  };
}

export function speciesReceived(speciesList: Species[]): actions.SpeciesReceived {
    return {
      type: actions.SPECIES_RECEIVED,
      speciesList
    };
}

export function setSpecies(species: Species): actions.SetSpecies {
  return {
    type: actions.SET_SPECIES,
    species
  };
}

export function getSpeciesPeople(peoples: string[]): actions.GetSpeciesPeople {
  return {
    type: actions.GET_SPECIES_PEOPLE,
    peoples
  };
}

export function speciesPeopleReceived(peopleList: SpeciesPeople[]): actions.SpeciesPeopleReceived {
  return {
    type: actions.SPECIES_PEOPLE_RECEIVED,
    peopleList
  };
}