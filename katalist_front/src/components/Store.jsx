import { createContext } from 'react';

export const initialState = {   todo:         { list: [], item: {} },
                                mainCategory: { list: [], item: {} }};

export const Store = createContext(initialState);