import React, {FC} from 'react';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './navigation/MainTabs';

const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
