import { useState, useEffect } from 'react';

type Theme = {
  title: string;
  colors: {
    backgroundPrimary: string;
    backgroundSecundary: string;
    textPrimary: string;
    textSecondary: string;
    textContent: string;
  };
};

function usePersistedState(key: string, initialState: Theme) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
