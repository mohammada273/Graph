import { createAction } from '@reduxjs/toolkit';

export const LOGIN_SUBMIT = "login/submitAction";
export const loginSubmitWithSaga = createAction(LOGIN_SUBMIT);