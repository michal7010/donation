import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #282c34;
margin-bottom: 10px;
`;

const RemoveButton = styled.button`
  margin-right: 20px;
`;

const EditButton = styled.button`
margin-right: 40px;
`;

export const Donation = ({donation, donationId, removeDonations, editDonations}) => (
    <Wrapper>
        <RemoveButton onClick={() => removeDonations({donationId, donation})}>remove</RemoveButton>
        <EditButton onClick={() => editDonations(donationId)}>edit</EditButton>
        {donation.name}
    </Wrapper>
);
