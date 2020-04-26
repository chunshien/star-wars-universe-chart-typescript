import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../reducers";
import { Action } from "../actionTypes";
import { getSpeciesList, setSpecies } from "../actionCreators";
import SpeciesComponent from "./Species";
import { Species as SpeciesInterface } from "../interfaces";

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    getSpeciesList: () => {
        dispatch(getSpeciesList());
    },
    setSpecies: (species: SpeciesInterface) => {
        dispatch(setSpecies(species));
    }
});

const mapStateToProps = (state: AppState) => {
  return {
    speciesList: state.speciesList,
    loading: state.loading,
    selectedSpecies: state.selectedSpecies,
    peopleList: state.peopleList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesComponent);
