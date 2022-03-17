import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box, Button, FlatList, Text, useTheme} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CourseCard} from '../../organisms/course-card';

let tab = createMaterialTopTabNavigator();

const Screen: React.FC = () => {
  let theme = useTheme();
  return (
    <Box flex={1} px="12px">
      <FlatList
        data={[1, 2, 2, 3, 4]}
        renderItem={() => {
          return <CourseCard isOwner />;
        }}
      />
    </Box>
  );
};
export default observer(Screen);
