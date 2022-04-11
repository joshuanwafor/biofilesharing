import React from 'react';
import Template from '../../templates/standardPage';
import {observer} from 'mobx-react-lite';
import {Box, Button, useTheme} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MySpaces from './my-spaces';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {spacesManager} from '../../../store/spaces';

const Screen: React.FC = () => {
  let theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  React.useEffect(() => {
    spacesManager.loadMySpaces();
  }, []);

  return (
    <Template
      title="My Resources"
      right_icons={
        <Button
          colorScheme="rose"
          rounded={'full'}
          onPress={() => {
            navigation.navigate('editSpace', {});
          }}
          leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
          Create
        </Button>
      }>
      <MySpaces />
    </Template>
  );
};

export default observer(Screen);
