

import React, {createContext, useContext, useEffect, useState} from 'react';
import AppRouter from './AppRouter';
import {SCREEN_NAMES} from './ScreenNames';
import { getAsyncItem } from '../utils';


function Router() {
  const [initialRouteName, setInitialRouteName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      (async () => {
          const jwtToken = await AsyncStorage('jwt');
          console.log('jwtToken', jwtToken);

          if (jwtToken) {
              setInitialRouteName(SCREEN_NAMES.HOME);
          } else {
            setInitialRouteName(SCREEN_NAMES.SIGN_UP_SCREEN);
          }

      })();

    return () => {
      isMounted = false;
    };
  }, [])

  if (loading || !initialRouteName) {
    return <></>;
  }

  return (
      <AppRouter initialRouteName={initialRouteName} />
  );
}

export default Router;
