import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Box, HStack, useTheme} from 'native-base';
import React from 'react';
import Template from '../../templates/space-room';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {SpaceRoomFeed} from './feed';
import {Share, StatusBar} from 'react-native';
import {observer} from 'mobx-react';
import {userManager} from '../../../store/user';
import {buildLink} from '../../../services/dynamic-links';
import {AppIconButton} from '../../atoms/buttons';

let tab = createMaterialTopTabNavigator();

export default observer(function () {
  let theme = useTheme();
  const {
    params: {space},
  } = useRoute<RouteProp<MainAppNavigationRoutes, 'spaceRoom'>>();
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
            {userManager.user?.id == space.publisher_id ? (
              <AppIconButton
                name={'add-outline'}
                color={theme.colors.rose[800]}
                onPress={() => {
                  navigation.navigate('newResource', {space: space});
                }}
              />
            ) : null}

            {userManager.user?.id == space.publisher_id ? (
              <AppIconButton
                name={'settings-outline'}
                color={theme.colors.rose[800]}
                onPress={() => {
                  navigation.navigate('editSpace', {space: space});
                }}
              />
            ) : null}

            <AppIconButton
              name={'arrow-redo-outline'}
              color={theme.colors.rose[800]}
              onPress={() => {
                buildLink(space.code ?? '')
                  .then(async v => {
                    console.log(v);
                    await Share.share({
                      message: v,
                    });
                  })
                  .catch(e => {
                    console.log(e);
                  });
              }}
            />
          </HStack>
        </Box>
      }>
      <SpaceRoomFeed />
    </Template>
  );
});
