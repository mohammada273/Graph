import { call, put, takeEvery } from 'redux-saga/effects';
import { FLIGHT_LIST } from "./actions";
import { fetchFlightList, fetchUsername, fetchLogout } from "./api";
import { toast } from "react-toastify";
import { addToken, addUsername } from "../shares/shareReducer";
import { addFlightInfo } from './slice';

function* getFlightList(action) {
  /*
  action.payload :
  Token , Pagination: { page, size }
  */
    var res = yield call(fetchFlightList, action.payload);
    if(res.status === 401){
      toast.error("توکن شما منقضی شده است مجددا لاگین کنید");
      yield put(addToken(''));
    }
    if(res.status === 200 && res.data.total != null){
      yield put(addFlightInfo(res.data));
    }

}
function* getUsername(action) {
  /*
  action.payload = TOKEN
  */
  var res = yield call(fetchUsername, action.payload);
  if(res.result === 'unauthorized'){
    toast.error("توکن شما منقضی شده است مجددا لاگین کنید");
    yield put(addToken(''));
  }
  else if(res.result === 'success'){
    yield put(addUsername(res.username));
  }
}
function* logoutUSer(action) {
  /*
  action.payload = TOKEN
  */
  var res = yield call(fetchLogout, action.payload);
  if(res.result === 'success'){
    toast.success("با موفقیت از حساب خود خارج شدید");
    yield put(addToken(''));
  }
  else{
    toast.error("خطایی رخ داده است");
  }
}

function* mySaga() {
  yield takeEvery(FLIGHT_LIST, getFlightList);
}

export default mySaga;