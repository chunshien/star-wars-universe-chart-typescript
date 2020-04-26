import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionCreators from "../actionCreators";
import * as actionTypes from "../actionTypes";
import { Species, SpeciesPeople } from "../interfaces";

export function* fetchSpecies(action: actionTypes.GetSpeciesList) {
  try{
      let response = yield fetch('https://swapi.dev/api/species')
          .then(response => response.json(), );
      let speciesList: Species[] = response.results;
      while(response.next) {
          response = yield fetch(response.next).then(response => response.json(), );
          speciesList = [...speciesList, ...response.results]
      }
      yield put(actionCreators.speciesReceived(speciesList));
      yield put(actionCreators.setSpecies(speciesList[0]));
  } catch(e) {
    console.log(e)
  }
}

export function* setSpecies(action: actionTypes.SetSpecies) {
  try{
    const people = action.species.people;
    yield put(actionCreators.getSpeciesPeople(people));
  } catch(e) {
    console.log(e)
  }
}

export function* fetchSpeciesPeople(action: actionTypes.GetSpeciesPeople) {
  const peoples = action.peoples;
  let response;
  let peopleList: SpeciesPeople[] = [];
  for(var url of peoples) {
    response = yield fetch(url).then(response => response.json(), );
    if(response) {
      peopleList.push(response)
    }
  };
  yield put(actionCreators.speciesPeopleReceived(peopleList));
}

export function* actionWatcher() {
    yield takeLatest('GET_SPECIES_LIST', fetchSpecies);
    yield takeLatest('SET_SPECIES', setSpecies);
    yield takeLatest('GET_SPECIES_PEOPLE', fetchSpeciesPeople);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}