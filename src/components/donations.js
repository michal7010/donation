import React from "react";
import {Donation} from "./donation"
import styled from "styled-components";

const Wrapper = styled.div`
margin: 0 1300px 500px 0;
background: gray;
padding: 30px;
`;

export const Donations = ({removeDonations, editDonations, donations}) => (
    <Wrapper>
        {donations.map((donation, id) =>
            <Donation key={id} donationId={id} donation={donation} removeDonations={removeDonations}
                      editDonations={editDonations}/>
        )}
    </Wrapper>
);