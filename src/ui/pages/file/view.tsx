import React from 'react';
import Template from '../../templates/standardPage';
import {observer} from 'mobx-react-lite';
import {Box, Button, useTheme} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {spacesManager} from '../../../store/spaces';
import {RenderFiles} from '../../organisms/files/files-render';

const TopBar = createMaterialTopTabNavigator();
const Screen: React.FC = () => {
  let theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return <Template title="View File">
      
  </Template>;
};

export default observer(Screen);
