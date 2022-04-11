import {AppTypographyBody1} from '../../atoms/typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Template from '../../templates/standardPage';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {VStack} from 'native-base';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {RenderSpaceDetails} from '../../organisms/space/render-details';

const Tab = createMaterialTopTabNavigator();

function SpaceInfoTag({icon, val}: {icon: string; val: string}) {
  return (
    <VStack alignItems="center" space={1} p="8px">
      <Ionicons name={icon} size={20} color="black" />
      <AppTypographyBody1 style={{color: 'black'}}>
        {val ?? 130}
      </AppTypographyBody1>
    </VStack>
  );
}

const Screen: React.FC = () => {
  const theme = useTheme();
  const {
    params: {space},
  } = useRoute<RouteProp<MainAppNavigationRoutes, 'spaceDetails'>>();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return (
    <Template title="Title goes here" show_back>
      <RenderSpaceDetails space={space} />
    </Template>
  );
};

export default Screen;
