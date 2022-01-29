import React from 'react';
import { StyleSheet, View } from 'react-native';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';

import { CounterView } from './CounterView';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterView />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);
