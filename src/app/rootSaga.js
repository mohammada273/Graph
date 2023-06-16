import { fork } from 'redux-saga/effects';
import login from '../features/login/saga';
import home from '../features/home/saga';

export default function* rootSaga() {
  yield fork(login);
  yield fork(home)
}
