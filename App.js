import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContainerScreen from './ContainerScreen';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store = {store}>
    <View>
      <ContainerScreen />
    </View>
    </Provider>
  );
}