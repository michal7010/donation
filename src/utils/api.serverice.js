import axios from "axios";
import queryString from "query-string";

const SAVE_URL = "/api/donations/save";
const UPDATE_URL = "/api/donations/update";
const DELETE_URL = "/api/donations/delete";

export const saveRequest = requestParams => {
    axios.post(SAVE_URL, queryString.stringify(requestParams));
};

export const updateRequest = requestParams => {
    axios.post(UPDATE_URL, queryString.stringify(requestParams));
};

export const deleteRequest = requestParams => {
    axios.post(DELETE_URL, queryString.stringify(requestParams));
};
  
