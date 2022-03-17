import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import Dashboard from '../../ui/pages/dashboard';
import Explore from '../../ui/pages/explore';
import Feed from '../../ui/pages/feed';
import Settings from '../../ui/pages/settings';
import {useTheme} from 'native-base';

const TabStack = createBottomTabNavigator<MainAppNavigationRoutes>();

const Screen: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <TabStack.Navigator
      initialRouteName="dashboard"
      defaultScreenOptions={
        {
          // headerShown: false,
        }
      }
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.blue[500],
        tabBarIcon: ({focused, color}) => {
          let iconName = '';

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home';
          }

          if (route.name === 'feed') {
            iconName = focused ? 'apps-outline' : 'apps-outline';
          }

          if (route.name === 'explore') {
            iconName = focused ? 'search-outline' : 'search-outline';
          }

          if (route.name === 'settings') {
            iconName = focused ? 'cog-outline' : 'cog-outline';
          }
          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? theme.colors.rose[800] : color}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: {fontWeight: '500', fontFamily: 'AvenirNext-Bold'},
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {elevation: 0},
      })}>
      <TabStack.Screen
        name="home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="explore"
        component={Explore}
        options={{headerShown: false}}
      />

      <TabStack.Screen
        name="feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </TabStack.Navigator>
  );
};

export default Screen;
