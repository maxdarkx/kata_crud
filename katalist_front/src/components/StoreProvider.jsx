import Store from './Store';
import reducer from './reducer';
import React, { useReducer } from 'react';
import initialState from './initialState';

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>
}

export default StoreProvider;