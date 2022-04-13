import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import Dashboard from '../../ui/pages/dashboard';
import MyFiles from '../../ui/pages/my-resourses';
import Settings from '../../ui/pages/settings';
import {useTheme} from 'native-base';
import {Host} from 'react-native-portalize';

const TabStack = createBottomTabNavigator<MainAppNavigationRoutes>();

const Screen: React.FC<{}> = () => {
  const theme = useTheme();
  return (
    <Host>
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
              iconName = focused
                ? 'folder-open-outline'
                : 'folder-open-outline';
            }

            if (route.name === 'files') {
              iconName = focused ? 'archive-outline' : 'archive-outline';
            }

            if (route.name === 'settings') {
              iconName = focused ? 'cog-outline' : 'cog-outline';
            }
            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? 'black' : color}
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
          name="files"
          component={MyFiles}
          options={{headerShown: false}}
        />
        {/* <TabStack.Screen
          name=""
          component={Feed}
          options={{headerShown: false}}
        /> */}
        <TabStack.Screen
          name="settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </TabStack.Navigator>
    </Host>
  );
};

export default Screen;
