import React from "react";
import {ActionBar} from "./action_bar"
import {RequiredField} from "./required_field"
import {RequiredSelect} from "./required_select"
import styled from "styled-components";

const Popup = styled.div`
  position: fixed;
  margin: 10px, 10px, 10px, 10px
  top: 0;
  width: 50%;
  background-color: gray
`;

const currenciesOptions = [{label: 'USD', value: 'USD'},
    {label: 'EUR', value: 'EUR'}];

const entityTypes = [{label: 'entity1', value: 'entity1'},
    {label: 'entity2', value: 'entity2'}];

export const CreateCard = ({
                               resetFields,
                               entityName,
                               nameError,
                               setEntityName,
                               sum,
                               sumError,
                               setSum,
                               entityType,
                               setEntityType,
                               goal,
                               goalError,
                               setGoal,
                               conditions,
                               setConditions,
                               currency,
                               setCurrency,
                               gate,
                               gateError,
                               setGate,
                               typeError,
                               currencyError,
                               addDonation,
                               donationId
                           }) => (

    <Popup>
        <div>הוספת דיווח על תרומה</div>
        <br/>
        <RequiredField placeholder="שם הישות המדינית הזרה" textValue={entityName} onChange={setEntityName}
                       error={nameError}/>
        <RequiredField placeholder="סכום התרומה בשח" textValue={sum} onChange={setSum} error={sumError}/>
        <RequiredSelect placeholder="סוג הישות המדינית הזרה" options={entityTypes} value={entityType}
                        onChange={setEntityType} error={typeError}/>
        <RequiredField placeholder="ייעוד התרומה" textValue={goal} onChange={setGoal} error={goalError}/>
        <input placeholder="התנאים לתרומה" value={conditions} onChange={event => setConditions(event.target.value)}/>
        <RequiredSelect placeholder="סוג המטבע" options={currenciesOptions} value={currency} onChange={setCurrency}
                        error={currencyError}/>
        <RequiredField placeholder="שער ההמרה" textValue={gate} onChange={setGate} error={gateError}/>

        <ActionBar onConfirm={addDonation} onReset={resetFields} donationId={donationId}/>
    </Popup>
);
