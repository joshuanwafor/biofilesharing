import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box, Button, FlatList, Text, useTheme} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CourseCard} from '../../organisms/space-card';
import {spacesManager} from '../../../store/spaces';

const Screen: React.FC = () => {
  let theme = useTheme();
  return (
    <Box flex={1} px="12px" borderTopWidth={1} borderColor="gray.200">
      <FlatList
        data={spacesManager.myspaces}
        renderItem={item => {
          return <CourseCard isOwner space={item.item} />;
        }}
      />
    </Box>
  );
};
export default observer(Screen);
