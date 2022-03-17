import {
  AppTypography,
  AppTypographyCaption,
  AppTypographySubHeading,
} from '../../atoms/typography';
import React from 'react';
import {View} from 'react-native';
import Template from '../../templates/standardPage';
import {observer} from 'mobx-react-lite';
import {feedsManager} from '../../../store/feed';
import {Box, Button, useTheme} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MySpaces from "./my-spaces"
let tab = createMaterialTopTabNavigator();

const Screen: React.FC = () => {
  let theme = useTheme();
  return (
    <Template
      title="My Resources"
     
      right_icons={
        <Button
          colorScheme="rose"
          rounded={'full'}
          leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
          Create
        </Button>
      }>
      <tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 0,
          },
          tabBarIndicatorStyle: {
            // display: 'none',
            borderColor: 'transparent',
            backgroundColor: theme.colors.rose[900],
          },
        }}>
        <tab.Screen name="Spaces" component={MySpaces}></tab.Screen>
        <tab.Screen name="Collection" component={MySpaces}></tab.Screen>
      </tab.Navigator>
    </Template>
  );
};
export default observer(Screen);
