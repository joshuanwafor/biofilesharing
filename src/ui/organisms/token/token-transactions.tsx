import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';

const Tab = createMaterialTopTabNavigator();
export const TokenTransactions: React.FC = () => {
  const Me = () => <View />;
  return (
    <Tab.Navigator
      tabBar={props => (
        <View
          style={{
            paddingVertical: 0,
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          }}>
          <MaterialTopTabBar {...props} />
        </View>
      )}>
      <Tab.Screen name="Buy" component={Me} />
      <Tab.Screen name="Sell" component={Me} />
    </Tab.Navigator>
  );
};
