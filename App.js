import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {AppStateProvider} from './src/contexts/AppState';
import Navigation from './src/navigation';
import 'react-native-gesture-handler';

import './src/react-native-ui-lib';
import './src/assets';
import {I18nProvider} from './src/i18n';

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
