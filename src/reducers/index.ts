import * as actions from "../actionTypes";
import { Species, SpeciesPeople } from "../interfaces";

export interface SpeciesState {
    speciesList: Species[];
    selectedSpecies: Species | undefined;
    loading: boolean;
    peopleList: SpeciesPeople[];
  }
  
const initialState: SpeciesState = {
    speciesList: [],
    selectedSpecies: undefined,
    loading: false, 
    peopleList: []
};

const reducer = (state: SpeciesState = initialState, action: actions.Action): SpeciesState => {
    switch (action.type) {
        case 'GET_SPECIES_LIST':          
            return { ...state, loading: true };
        case 'SPECIES_RECEIVED':
            return { 
                ...state, 
                speciesList: action.speciesList,
                loading: false
            };
        case 'SET_SPECIES':
            return {
                ...state,
                selectedSpecies: action.species,
                loading: false 
            };
        case 'GET_SPECIES_PEOPLE':          
            return { ...state, loading: true };
        case 'SPECIES_PEOPLE_RECEIVED':
            return { 
                  ...state, 
                  peopleList: action.peopleList,
                  loading: false
            }
        default:
            return state;
    }
}
export type AppState = ReturnType<typeof reducer>;
export default reducer;