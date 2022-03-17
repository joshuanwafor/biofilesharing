import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographyHeading,
  AppTypographySubHeading,
} from '../../atoms/typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Template from '../../templates/standardPage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '@interface/navigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Box, Button, HStack, theme, VStack} from 'native-base';
import {CourseCard} from '../../organisms/course-card';

const Tab = createMaterialTopTabNavigator();



const Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return (
    <Template
      title="Explore"
      show_back
      right_icons={
        <HStack space="2">
          <Ionicons
            name="filter-outline"
            size={24}
            onPress={() => {}}
            style={{
              padding: 8,
              backgroundColor: theme.colors.gray[100],
              borderRadius: 50,
              color: theme.colors.rose[900],
            }}
          />
        </HStack>
      }>
      <Box flex={1} bg="white">
        <HStack p="12px" space={'12px'}>
          <Button
            bg="gray.200"
            rounded={'lg'}
            rightIcon={<Ionicons name="chevron-down-outline" size={18} />}
            colorScheme="rose">
            Free
          </Button>
          <Button
            bg="gray.200"
            rounded={'lg'}
            rightIcon={<Ionicons name="chevron-down-outline" size={18} />}
            colorScheme="rose">
            Trending
          </Button>
          <Button
            bg="gray.200"
            rounded={'lg'}
            rightIcon={<Ionicons name="chevron-down-outline" size={18} />}
            colorScheme="rose">
            Topic
          </Button>
        </HStack>
        <Box flex={1} px="12px">
          <FlatList
            data={[1, 2, 1, 2, 1, 2, 3, 4, 5, 6]}
            renderItem={() => {
              return <CourseCard />;
            }}
          />
        </Box>
      </Box>
    </Template>
  );
};

export default Screen;
