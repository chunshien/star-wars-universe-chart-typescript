import React, { FunctionComponent,  useEffect, useCallback } from 'react';
import _ from 'lodash';
import { Paper, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

import { Species as SpeciesInterface, SpeciesPeople as SpeciesPeopleInterface } from "../interfaces";
import Loading from '../components/Loading';
import Dropdown from '../components/Dropdown';
import SpeciesChart from '../components/SpeciesChart';

const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    }
}));

const Header = styled.div`
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding: 10px;
`;

interface Props {
    speciesList: SpeciesInterface[];
    peopleList: SpeciesPeopleInterface[];
    selectedSpecies?: SpeciesInterface;
    getSpeciesList(): void;
    setSpecies(species: SpeciesInterface): void;
    loading: boolean;
}

const SpeciesComponent: FunctionComponent<Props> = ({loading, speciesList, peopleList, selectedSpecies, getSpeciesList, setSpecies}) => {
    const classes = useStyles();

    useEffect(() => {
        if (speciesList.length === 0){
            getSpeciesList();
        }
    }, [speciesList, getSpeciesList]);

    const handleChange = useCallback((value) => {
        const selected: SpeciesInterface | undefined = speciesList.find((species: SpeciesInterface)=>species.name===value);
        if(selected){
            setSpecies(selected);
        }        
    }, [speciesList, setSpecies]);
    
    return (
        <>
            {loading && 
                <Loading />
            }
            <Paper className={classes.form}>
                <Header>
                    Star Wars Universe 
                </Header>
                <Dropdown 
                    title={'Pick a species'}
                    data={speciesList}
                    dataKey={'name'}
                    selected={selectedSpecies}
                    onChange={handleChange} 
                />
                <SpeciesChart 
                    data={peopleList}
                    xAxis={'height'}
                    yAxis={'mass'}
                    label={'name'}
                    miscLabel={'gender'}
                />
            </Paper>
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
