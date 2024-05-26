import {
  CREATE_BENEFICIARY,
  RETRIEVE_BENEFICIARY,
  UPDATE_BENEFICIARY,
  DELETE_BENEFICIARY,
} from "./types";


export const createBeneficiary = (data) => async (dispatch) => {
  try {

    dispatch({
      type: CREATE_BENEFICIARY,
      payload: data,
    });

    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveBeneficiary = () => async (dispatch) => {
  try {
    dispatch({
      type: RETRIEVE_BENEFICIARY,
      payload: '',
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateBeneficiary = (data) => async (dispatch) => {
  try {


    dispatch({
      type: UPDATE_BENEFICIARY,
      payload: data,
    });

    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBeneficiary = (id) => async (dispatch) => {
  try {


    dispatch({
      type: DELETE_BENEFICIARY,
      payload: { id },
    });
    return Promise.resolve(id);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
