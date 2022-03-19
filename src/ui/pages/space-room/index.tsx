import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Box, HStack, useTheme} from 'native-base';
import React from 'react';
import Template from '../../templates/space-room';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {SpaceRoomFeed} from './feed';
import {StatusBar} from 'react-native';

let tab = createMaterialTopTabNavigator();

export default function () {
  let theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return (
    <Template
      title="Room"
      show_back={true}
      right_icons={
        <Box>
          <StatusBar
            backgroundColor={theme.colors.rose[900]}
            barStyle={'light-content'}
          />
          <HStack space="2">
            <Ionicons
              name="chatbubbles-outline"
              size={24}
              onPress={() => {}}
              style={{
                padding: 8,
                backgroundColor: theme.colors.gray[100],
                borderRadius: 50,
                color: theme.colors.rose[900],
              }}
            />
            <Ionicons
              name="document-attach-outline"
              size={24}
              onPress={() => {}}
              style={{
                padding: 8,
                backgroundColor: theme.colors.gray[100],
                borderRadius: 50,
                color: theme.colors.rose[900],
              }}
            />
            <Ionicons
              name="add-outline"
              size={24}
              onPress={() => {
                navigation.navigate('newResource');
              }}
              style={{
                padding: 8,
                backgroundColor: theme.colors.gray[100],
                borderRadius: 50,
                color: theme.colors.rose[900],
              }}
            />
          </HStack>
        </Box>
      }>
      <SpaceRoomFeed />
    </Template>
  );
}
