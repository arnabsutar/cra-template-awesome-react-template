import { all } from 'redux-saga/effects';
import applicationBaseWatcher from '../app/common/redux/sagas/applicationBaseWatcher';

export default function* RootSaga() {
  yield all([applicationBaseWatcher()]);
}
