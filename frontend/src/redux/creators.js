import {
  ADD_USER,
  GET_CARD,
  GET_URL,
  LOGIN_USER,
  LOGOUT_USER,
  GET_MAP,
  SET_PRESET,
  CLEAR_PRESET
} from "./actions";

export const AddUserAC = (status, user) => {
  return {
    type: ADD_USER,
    isLogin: status,
    username: user
  };
};
export const ReqUserAC = (status, user, data) => {
  return {
    type: LOGIN_USER,
    isLogin: status,
    username: user,
    // data: data
  };
};
export const LogoutUserAC = (status, user) => {
  return {
    type: LOGOUT_USER,
    isLogin: status,
    username: user
  };
};

export const GetUrlAC = data => {
  return {
    type: GET_URL,
    data: data
  };
};
export const GetCardAC = (
  address,
  m2,
  countBath,
  countDoor,
  countRoom,
  desPrice,
  perePlanPrice,
  price
) => {
  return {
    type: GET_CARD,
    address: address,
    m2: m2,
    countBath: countBath,
    countDoor: countDoor,
    countRoom: countRoom,
    desPrice: desPrice,
    perePlanPrice: perePlanPrice,
    price:price
  };
};
export const GetMapAC = map => {
  return {
    type: GET_MAP,
    ymaps: map
  };
};

export const SetPresetAC = data => {
  return {
    type: SET_PRESET,
    selectedPreset: data
  };
};
export const ClearPresetAC = () => {
  return {
    type: CLEAR_PRESET,
    selectedPreset: {}
  };
};
