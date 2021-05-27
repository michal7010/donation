import React from "react";
import styled from "styled-components";

const TextWrapper = styled.input`
display: inline;
border-bottom-color: ${error => error !== "" ? 'red' : 'black'}
`;

const Star = styled.div`
  display: inline;
  margin-left: 1px;
  color: red;
`;


export const RequiredField = ({placeholder, textValue, onChange, error}) => (
    <div>
        <TextWrapper error={error} placeholder={placeholder} value={textValue}
                     onChange={event => onChange(event.target.value)}/>
        <Star>*</Star>
    </div>
);
