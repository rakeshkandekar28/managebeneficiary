import {
  CREATE_BENEFICIARY,
  RETRIEVE_BENEFICIARY,
  UPDATE_BENEFICIARY,
  DELETE_BENEFICIARY,
  DELETE_ALL_BENEFICIARY,
} from "../actions/types";

const initialState = [];

const beneficiaryReducer = (beneficiary = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BENEFICIARY:
      return [...beneficiary, payload];

    case RETRIEVE_BENEFICIARY:
      return payload;

    case UPDATE_BENEFICIARY:
      return payload;

    case DELETE_BENEFICIARY:
      return beneficiary.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_BENEFICIARY:
      return [];

    default:
      return beneficiary;
  }
};

export default beneficiaryReducer;