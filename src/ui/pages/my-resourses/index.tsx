import React from 'react';
import Template from '../../templates/standardPage';
import {observer} from 'mobx-react-lite';
import {Box, Button, useTheme} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {RenderFiles, RenderShareWithFiles} from '../../organisms/files/files-render';
import {ShareFileComp} from '../../organisms/share';
import {fileManager} from '../../../store/files';

const TopBar = createMaterialTopTabNavigator();
const Screen: React.FC = () => {
  let theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return (
    <Template title="File History" right_icons={<ShareFileComp />}>
      <TopBar.Navigator>
        <TopBar.Screen name="Shared" component={RenderFiles} />
        <TopBar.Screen name="Received" component={RenderShareWithFiles} />
      </TopBar.Navigator>
    </Template>
  );
};



export default Screen;
