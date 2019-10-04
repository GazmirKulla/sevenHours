import { createStore , applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers"
import sagas from "./sagas";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'react-router-redux'
import { history } from 'util/history'

const routersMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routersMiddleware];

const rootPersistConfig = {
  key: 'team',
  storage: storage,
  blacklist: ['navigation']
};

const persistedReducer = persistReducer(rootPersistConfig, reducers)

export default function configureStore() {
  const store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(...middlewares),
    // other store enhancers if any
  ));

  sagaMiddleware.run(sagas);

  let persistor = persistStore(store)
  return { store, persistor }
}