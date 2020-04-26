import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components'
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const Container = styled.div`
    width: 100%;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
    box-sizing: border-box;
`;

interface Props {
    title: string;
    selected: any; // leave any type for reusable other data object
    dataKey: string;
    data: any[]; // leave any type for reusable other data object
    onChange:(value: string) => void;
}

const Dropdown: FunctionComponent<Props> = ({title, selected, dataKey, data, onChange}) => {
    const handleChange = useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);

    return (
        <Container>
            {data.length > 0 &&
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={(selected && selected[dataKey]) || (data && data[0][dataKey])}
                            onChange={handleChange}
                            >
                                {data.map((item, index)=>(
                                    <MenuItem key={index} value={item[dataKey]}>{item[dataKey]}</MenuItem>
                                ))}
                        </Select>
                </FormControl>
            }
        </Container>
    )
}

export default Dropdown;