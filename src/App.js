import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {AppStateProvider} from './contexts/AppState';
import Navigation from './navigation';
import 'react-native-gesture-handler';

import './react-native-ui-lib';
import './assets';
import {I18nProvider} from './i18n';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <I18nProvider>
        <AppStateProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </AppStateProvider>
      </I18nProvider>
    </SafeAreaProvider>
  );
};

export default App;
