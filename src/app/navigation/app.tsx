import React from 'react';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './app_tabs';
import {Host} from 'react-native-portalize';
import {useAppLoader} from '../../hooks/loader';
import { useBiometrics } from '../../hooks/bio-hook';

const Stack = createNativeStackNavigator<MainAppNavigationRoutes>();
const Screen: React.FC<{}> = () => {
  useBiometrics()
  return (
    <Host>
      <Stack.Navigator
        initialRouteName="dashboard"
        defaultScreenOptions={{headerShown: false}}>
        <Stack.Screen
          name="dashboard"
          component={MainNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="share"
          component={MainNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </Host>
  );
};

export default Screen;
