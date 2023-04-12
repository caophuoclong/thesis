/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from '~/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View>
        <Text>Xin chao</Text>
      </View>
    </Provider>
  );
}

export default App;
