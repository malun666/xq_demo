import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from './../middleware';
import rootReducer from './../reducers';

export function configureStore() {
  let middleware = applyMiddleware(thunk);
  middleware = composeWithDevTools(middleware);
  const store = createStore(rootReducer as any, middleware);

  return store;
}
