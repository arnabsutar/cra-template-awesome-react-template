import { all } from 'redux-saga/effects';
import applicationBaseWatcher from '../app/common/redux/sagas/applicationBaseWatcher';
import { homeWatcher } from '../app/modules/home';

export default function* RootSaga() {
  yield all([applicationBaseWatcher(), homeWatcher()]);
}
