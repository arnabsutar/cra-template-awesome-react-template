// eslint-disable-next-line no-unused-vars
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  commonTypes,
  applicationLoadedSuccessfully,
} from '../actions/commonActions';

// eslint-disable-next-line no-unused-vars
function* performAppLoadedSideEffectDemo(action) {
  try {
    // const respose = yield call(() => true);
    yield put(applicationLoadedSuccessfully());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error Happened');
    throw e;
  }
}

function* applicationBaseWatcher() {
  yield takeEvery(
    commonTypes.APPLICATION_LOADED,
    performAppLoadedSideEffectDemo,
  );
}

export default applicationBaseWatcher;
