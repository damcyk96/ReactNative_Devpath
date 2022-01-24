import React, {FC} from 'react';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/AppStack';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';

const App: FC = () => {
  const store = configureStore();
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
