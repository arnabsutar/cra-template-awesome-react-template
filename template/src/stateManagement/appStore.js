import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './rootReducer';
import RootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const appStrore = createStoreWithMiddleware(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

/**
 * Un-comment the below section and comment above appStore creation statement
 * in case user doesn't want to have redux dev tool
 */
// export const appStrore = createStoreWithMiddleware(RootReducer);

sagaMiddleware.run(RootSaga);

const { dispatch } = appStrore;

export default appStrore;
export { dispatch };
