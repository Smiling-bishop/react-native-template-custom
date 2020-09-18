import React from 'react';
import useAppState from '../contexts/AppState';
import AppLoading from '../pages/AppLoading/AppLoading';
import Authenticated from './authenticated';
import Unauthenticated from './unauthenticated';

const Navigation = () => {
  const {
    value: {loading, authenticated},
  } = useAppState();
  if (loading) {
    return <AppLoading />;
  }
  if (authenticated) {
    return <Authenticated />;
  }
  return <Unauthenticated />;
};

export default Navigation;
