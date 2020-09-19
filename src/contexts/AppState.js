import React from 'react';

const defaultValue = {
  loading: true,
  authenticated: false,
};

export const AppStateContext = React.createContext({defaultValue});

export const AppStateProvider = ({children}) => {
  const [value, set] = React.useState(defaultValue);
  const setValue = React.useCallback((v) => set({...value, ...v}), [
    value,
    set,
  ]);

  return (
    <AppStateContext.Provider
      value={{
        value,
        setValue,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

const useAppState = () => React.useContext(AppStateContext);

export default useAppState;
