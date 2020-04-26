import React, {FunctionComponent,  useEffect, useCallback } from 'react';
import _ from 'lodash';
import { Species as SpeciesInterface } from "../interfaces";

interface Props {
    speciesList: SpeciesInterface[];
    peopleList: any[];
    selectedSpecies?: SpeciesInterface;
    getSpeciesList(): void;
    setSpecies(species: any): void;
    loading: boolean;
}

const SpeciesComponent: FunctionComponent<Props> = ({
    loading, speciesList, peopleList, selectedSpecies, getSpeciesList, setSpecies}) => {
    useEffect(() => {
        if (speciesList.length === 0){
            getSpeciesList();
        }
    }, [speciesList, getSpeciesList]);
    console.log(speciesList, selectedSpecies, peopleList)
    return (
        <>
            <div>species</div>
        </>
    );
};

function dataPropsAreEqual(prevProps: Props, nextProps: Props) {
    return (_.isEqual(prevProps.speciesList, nextProps.speciesList) 
            && _.isEqual(prevProps.selectedSpecies, nextProps.selectedSpecies)
            && _.isEqual(prevProps.peopleList, nextProps.peopleList)
            && prevProps.loading === nextProps.loading
    );
}

const Species = React.memo(SpeciesComponent, dataPropsAreEqual);
export default Species;
