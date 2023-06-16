import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_SUBMIT } from './actions';
import { fetchLoginSubmit } from './api';
import { toast } from "react-toastify";
import { addToken } from "../shares/shareReducer";

function* sendInfo(action) {

    var res = yield call(fetchLoginSubmit, action.payload);
    if (res.data.result === 'wrong_pass') {
      toast.error('نام کاربری و یا کلمه عبور اشتباه میباشد');
    } else if (res.data.result === 'success') {
      toast.success("با موفقیت لاگین شدید");
      yield put(addToken(res.data.token));
    }
    //yield put(addCode(action.payload));
}

function* mySaga() {
  yield takeEvery(LOGIN_SUBMIT, sendInfo);
}

export default mySaga;