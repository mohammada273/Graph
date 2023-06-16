import { createAction } from '@reduxjs/toolkit';

export const FLIGHT_LIST = "home/flightList";
export const flightListWithSaga = createAction(FLIGHT_LIST);
export const GET_USERNAME = "home/username";
export const getUsernameWithSaga = createAction(GET_USERNAME);
export const LOGOUT_USER = "home/logout";
export const logoutUserWithSaga = createAction(LOGOUT_USER);