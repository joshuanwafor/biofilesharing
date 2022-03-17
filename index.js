/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-url-polyfill/auto';
import App from './App';
import {name as appName} from './app.json';
import {extendTheme, NativeBaseProvider} from 'native-base';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({colors: newColorTheme});

function Init() {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => Init);
