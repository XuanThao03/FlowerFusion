import {
  CHANGE_PASSWORD_FAIL,
  REQUEST_OTP,
  REQUEST_PASSWORD,
} from '../Constants/ResetPwConstant';

export const resetReducer = (state = '', action) => {
  switch (action.type) {
    case REQUEST_OTP:
      return {
        data: action.payload,
      };
    case CHANGE_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
