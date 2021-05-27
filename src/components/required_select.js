import React from "react";
import styled from "styled-components";
import Select from "react-dropdown-select";

const Wrap = styled.div`
width: 10%;
`;

const SelectWrap = styled(Select)`
display: inline;
margin-left: 360px;
border-bottom-color: ${error => error !== "" ? 'red' : 'black'}
`;

const Star = styled.div`
  display: inline;
  margin-left: 1px;
  color: red;
`;

export const RequiredSelect = ({placeholder, options, value, onChange, error}) => (
    <Wrap>
        <SelectWrap error={error} placeholder={placeholder} options={options} value={value}
                    onChange={event => onChange(event.value)}/>
        <Star>*</Star>
    </Wrap>
);
