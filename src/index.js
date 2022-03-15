import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

// saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'

// tool
import {composeWithDevTools} from 'redux-devtools-extension';
import allReducers from './reducers/allReducers';

//Router
import BasicExample from "./route/example";


const sagaMiddleware = createSagaMiddleware()
// Store
let store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <div className='div-index'>
              <BasicExample/>  
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
