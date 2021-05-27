import React from "react";
import {DonationCard} from "./components/donation_card";
import {Donations} from "./components/donations"
import withConfiguration from "./configurations/donation_configuration";
import styled from "styled-components";

const WrapHeader = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Container = styled.div`
text-align: center;
`;

const Button = styled.button`
  margin-top: 40px;
  color: blue;
`;


const DonationsForm = ({
                           entityName,
                           setEntityName,
                           sum,
                           setSum,
                           entityType,
                           setEntityType,
                           goal,
                           setGoal,
                           conditions,
                           setConditions,
                           currency,
                           setCurrency,
                           gate,
                           setGate,
                           addDonation,
                           removeDonations,
                           editDonations,
                           resetFields,
                           createDonation,
                           isOpen,
                           donations,
                           setDonations,
                           nameError,
                           goalError,
                           gateError,
                           sumError,
                           typeError,
                           currencyError
                       }) => {
    return (
        <Container>
            <WrapHeader>
                {isOpen &&
                (<DonationCard entityName={entityName}
                               setEntityName={setEntityName}
                               sum={sum}
                               setSum={setSum}
                               entityType={entityType}
                               setEntityType={setEntityType}
                               goal={goal}
                               setGoal={setGoal}
                               conditions={conditions}
                               setConditions={setConditions}
                               currency={currency}
                               setCurrency={setCurrency}
                               gate={gate}
                               setGate={setGate}
                               donations={donations}
                               setDonations={setDonations}
                               addDonation={addDonation}
                               isOpen={isOpen}
                               resetFields={resetFields}
                               nameError={nameError}
                               sumError={sumError}
                               goalError={goalError}
                               gateError={gateError}
                               typeError={typeError}
                               currencyError={currencyError}
                />)}

                <Donations donations={donations} sum={sum} removeDonations={removeDonations}
                           editDonations={editDonations}/>
                <Button onClick={() => createDonation()}>הוספת תרומה</Button>
            </WrapHeader>
        </Container>
    );
};

export default withConfiguration(DonationsForm);
