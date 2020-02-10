// Это не actions. Это types of actions. 
// В принципе не важно как вы назвали файл,
// Важно понимать что сами экшены - объекты у которых есть 
// Данные и поле type, а вот в этом поле лежат нижеприведенные типы.
const LOGOUT_USER ='LOGOUT_USER';
const ADD_USER ='ADD_USER';
const LOGIN_USER ='LOGIN_USER';
const GET_URL ='GET_URL';
const GET_CARD ='GET_CARD';
const GET_MAP ='GET_MAP';
const SET_PRESET = 'SET_PRESET';
const CLEAR_PRESET = 'CLEAR_PRESET';

export {LOGOUT_USER,ADD_USER,LOGIN_USER,GET_URL,GET_CARD,GET_MAP, SET_PRESET,CLEAR_PRESET}