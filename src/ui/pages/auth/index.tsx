import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Login from './login';
import Register from './register';
const stack = createNativeStackNavigator();
const Screen: React.FC = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default Screen;
