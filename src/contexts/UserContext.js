
import React, { createContext, useReducer } from 'react';
import { initialSate, UserReducer, userReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialSate);
    return (
        <UserContext.Provider value={{state, dispatch}} >
            {children}
        </UserContext.Provider>
    );
}
