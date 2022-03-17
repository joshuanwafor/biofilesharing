import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {theme} from '../../../style/theme';
import React from 'react';
import {View} from 'react-native';
import {ChatScreen} from '../chat';
import {AccountRecent} from './recent';
const TopTab = createMaterialTopTabNavigator();

export function DashboardTab() {
  const DemView = () => {
    return <View></View>;
  };
  return (
    <TopTab.Navigator
      initialRouteName="Trending"
      backBehavior="none"
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      style={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        elevation: 0,
      }}
      screenOptions={{
        tabBarStyle: {
          // height: 'auto',
          // padding: 0,
          // margin: 0,
          // alignItems: 'flex-start',
          // minWidth: 0,
          // width: 'auto',
          backgroundColor: 'white',
          elevation: 0,
        },
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'rgba(100,100,100,.8)',
        tabBarIndicatorStyle: {
          // display: 'none',
          borderColor: 'transparent',
          backgroundColor: 'gray',
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          textAlign: 'left',
          fontWeight: '500',
          fontSize: 24,
          margin: 0,
          padding: 0,
          marginRight: 0,
        },
      }}
      tabBar={props => (
        <View
          style={{
            paddingVertical: 0,
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          }}>
          <MaterialTopTabBar {...props} />
        </View>
      )}
      tabBarPosition="top">
      <TopTab.Screen
        name="Recent"
        component={AccountRecent}
        options={{title: 'Open'}}
      />
      <TopTab.Screen
        name="Processing"
        component={AccountRecent}
        options={{
          title: 'Processing',
        }}
      />
    </TopTab.Navigator>
  );
}
