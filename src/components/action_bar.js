import React from "react";
import styled from "styled-components";

const ResetButton = styled.button`
  margin-right: 10px;
  color: blue;
`;

const SaveButton = styled.button`
  background-color: blue;
  color: white;
`;

export const ActionBar = ({onConfirm, onReset, donationId}) => (
    <div>
        <ResetButton onClick={onReset}>ניקוי</ResetButton>
        <SaveButton onClick={() => onConfirm(donationId)}>שמירה</SaveButton>
    </div>
);
