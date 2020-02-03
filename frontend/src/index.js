import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import {createStore} from 'redux';
import reducers from './redux/reducer';
import {Provider} from 'react-redux';
import '../src/app.css';
import {GetMapAC} from './redux/creators';
import {loadState,saveState} from './localStorage.js'

const persistedState=loadState()

const store = createStore (reducers,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ());
store.subscribe(()=>{
  saveState( store.getState());
})
window.onLoad = () => {
  store.dispatch(GetMapAC(window.ymaps))
}

ReactDOM.render (<Provider store={store}><Router/></Provider>, document.getElementById ('root'));