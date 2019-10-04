import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App';
import * as serviceWorker from './serviceWorker';
import "typeface-roboto";
import configureStore from "Redux/store"
import loadingImage from './loading.gif';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import Loading from 'components/Loading';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={loadingImage} persistor={persistor}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
