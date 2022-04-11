import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Template from '../../templates/standardPage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Box, Button, HStack, theme, VStack} from 'native-base';
import {CourseCard} from '../../organisms/space-card';
import {observer} from 'mobx-react';
import {feedManager} from '../../../store/feed';
import {ExploreFilter} from '../../organisms/filters/expore-filter';

const Tab = createMaterialTopTabNavigator();

const Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  React.useEffect(() => {
    feedManager.loadMySpaces();
  }, []);

  return (
    <Template title="Explore" right_icons={<HStack space="2"></HStack>}>
      <Box flex={1} bg="white">
        <ExploreFilter />
        <Box flex={1} px="12px">
          <FlatList
            data={feedManager.spaces}
            renderItem={item => {
              return <CourseCard space={item.item} isOwner={false} />;
            }}
          />
        </Box>
      </Box>
    </Template>
  );
};

export default observer(Screen);
