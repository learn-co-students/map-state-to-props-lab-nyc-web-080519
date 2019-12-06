import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import manageUsers from './reducers/manageUsers'


// add imports and code
let store = createStore(manageUsers)


ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);

// use the createStore from redux, passing in the provided reducer, manageUsers, to create a store. Use Provider from react-redux to wrap <App />, passing store as a prop to the provider. This will give your components access to the store.