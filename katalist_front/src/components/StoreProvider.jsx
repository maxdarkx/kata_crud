import { Store, initialState } from './Store';
import reducer from './reducer';
import React, { useReducer } from 'react';

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>

}

export default StoreProvider;