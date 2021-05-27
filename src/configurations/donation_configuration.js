import React, {useState} from "react";
import {saveRequest, deleteRequest, updateRequest} from "../utils/api.serverice";
import {validate} from "../validations/invoke_validations";

const withConfiguration = WrappedComponent => () => {
    const [{entityName, nameError}, setEntityName] = useState({entityName: "", nameError: ""});
    const [{sum, sumError}, setSum] = useState({sum: "", sumError: ""});
    const [{entityType, typeError}, setEntityType] = useState({entityType: "", typeError: ""});
    const [{goal, goalError}, setGoal] = useState({goal: "", goalError: ""});
    const [conditions, setConditions] = useState("");
    const [{currency, currencyError}, setCurrency] = useState({currency: "", currencyError: ""});
    const [{gate, gateError}, setGate] = useState({gate: "", gateError: ""});
    const [donations, setDonations] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const textReg = /^[a-z\u0590-\u05fe]+$/i;
    const decimalReg = /^[+-]?\d*(?:[.,]\d*)?$/;

    const addDonation = (donationId) => {
        const donation = {
            name: entityName,
            sum: sum,
            entityType: entityType,
            goal: goal,
            conditions: conditions,
            currency: currency,
            gate: gate
        };
        if (isValid(donation)) {
            if (isEditMode) {
                saveForEditMode(donations, donationId, donation);
            } else {
                saveForCreateMode(donations, donation);
            }
            setIsOpen(false);
        }
    };

    const saveForEditMode = (donations, donationId, donation) => {
        const updatedList = donations.map((configuration, index) => {
            return (index === donationId) ?
                configuration.set('entityName', entityName)
                    .set('sum', sum)
                    .set('entityType', entityType)
                    .set('goal', goal)
                    .set('conditions', conditions)
                    .set('currency', currency)
                    .set('gate', gate)
                : configuration;
        });
        setDonations(updatedList);
        updateRequest(donation);
    };

    const saveForCreateMode = (donations, donation) => {
        donations.push(donation);
        setDonations(donations);
        saveRequest(donation);
    };

    const createDonation = () => {
        setIsOpen(true);
        setIsEditMode(false);
    };

    const removeDonations = ({donationId, donation}) => {
        const newList = donations.filter((donations, id) => {
            return (id !== donationId);
        });
        setDonations(newList);
        deleteRequest(donation)
    };

    const editDonations = (donationId) => {
        const donation = donations.find((donations, id) => {
            return (id === donationId);
        });
        setEntityName({entityName: donation.name, nameError: ""});
        setSum({sum: donation.sum, sumError: ""});
        setEntityType({entityType: donation.entityName, typeError: ""});
        setGoal({goal: donation.goal, goalError: ""});
        setConditions(donation.conditions);
        setCurrency({currency: donation.currency, currencyError: ""});
        setGate({gate: donation.gate, gateError: ""});
        setIsOpen(true);
        setIsEditMode(true);
    };

    const resetFields = () => {
        setEntityName({entityName: "", nameError: ""});
        setSum({sum: "", sumError: ""});
        setEntityType({entityType: "", typeError: ""});
        setConditions("");
        setCurrency({currency: "", currencyError: ""});
        setGate({gate: "", gateError: ""});
        setGoal({goal: "", goalError: ""});
    };

    const onChangeName = (value) => {
        if (textReg.test(value)) {
            setEntityName({entityName: value, nameError: ""})
        }
    };

    const onChangeGoal = (value) => {
        if (textReg.test(value)) {
            setGoal({goal: value, goalError: ""});
        }
    };

    const onChangeConditions = (value) => {
        if (textReg.test(value)) {
            setConditions(value);
        }
    };

    const onChangeGate = (value) => {
        if (decimalReg.test(value)) {
            setGate({gate: value, gateError: ""});
        }
    };

    const onChangeSum = (value) => {
        if (decimalReg.test(value)) {
            setSum({sum: value, sumError: ""});
        }
    };

    const onChangeType = (value) => {
        setEntityType({entityType: value, typeError: ""});
    };

    const onChangeCurrency = (value) => {
        setCurrency({currency: value, currencyError: ""});
    };

    const isValid = (donation) => {
        let isValid = true;
        const invalidName = validate(donation.name);
        if (invalidName) {
            setEntityName({
                entityName: donation.name,
                error: invalidName
            });
            isValid = false;
        }
        const invalidSum = validate(donation.sum);
        if (invalidSum) {
            setSum({
                sum: donation.sum,
                error: invalidSum
            });
            isValid = false;
        }
        const invalidType = validate(donation.entityType);
        if (invalidType) {
            setEntityType({
                entityType: donation.entityType,
                error: invalidType
            });
            isValid = false;
        }
        const invalidGoal = validate(donation.goal);
        if (invalidGoal) {
            setGoal({
                goal: donation.goal,
                error: invalidGoal
            });
            isValid = false;
        }
        const invalidCurrency = validate(donation.currency);
        if (invalidCurrency) {
            setCurrency({
                currency: donation.currency,
                error: invalidCurrency
            });
            isValid = false;
        }
        const invalidGate = validate(donation.gate);
        if (invalidGate) {
            setGate({
                gate: donation.gate,
                error: invalidGate
            });
            isValid = false;
        }
        return isValid;
    };

    return (
        <WrappedComponent
            createDonation={createDonation}
            entityName={entityName}
            setEntityName={onChangeName}
            sum={sum}
            setSum={onChangeSum}
            entityType={entityType}
            setEntityType={onChangeType}
            goal={goal}
            setGoal={onChangeGoal}
            conditions={conditions}
            setConditions={onChangeConditions}
            currency={currency}
            setCurrency={onChangeCurrency}
            gate={gate}
            setGate={onChangeGate}
            addDonation={addDonation}
            removeDonations={removeDonations}
            editDonations={editDonations}
            resetFields={resetFields}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            donations={donations}
            setDonations={setDonations}
            nameError={nameError}
            sumError={sumError}
            goalError={goalError}
            gateError={gateError}
            typeError={typeError}
            currencyError={currencyError}
        />
    );
};

export default withConfiguration;
