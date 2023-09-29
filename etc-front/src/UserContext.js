import React, { createContext, useState } from 'react';

export const UserContext = createContext({ basename: '' });

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [basename, setBasename] = useState('');

  const contextValue = { userInfo, setUserInfo, basename, setBasename };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}