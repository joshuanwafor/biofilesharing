import {

  AppTypographyBody1,
} from '../../atoms/typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Dimensions, ScrollView, View} from 'react-native';
import Template from '../../templates/explorePage';
import {CourseCard} from '../../organisms/course-card';
import {Box, Button, FlatList, Flex, HStack, Spacer, VStack} from 'native-base';
import {MainCourseCard} from '../../organisms/course-card/main-card';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';

const Tab = createMaterialTopTabNavigator();

const Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  return (
    <Template title="Explore">
      <ScrollView>
        <Flex flex={1} p="12px">
          <VStack>
            <Box>
              <AppTypographyBody1>Trending</AppTypographyBody1>
              <FlatList
                ItemSeparatorComponent={() => {
                  return <Box w="12px" />;
                }}
                data={[1, 2, 1, 2, 3, 4, 5, 6]}
                horizontal
                renderItem={() => {
                  return (
                    <Box w={Dimensions.get('window').width / 1.5}>
                      <MainCourseCard />
                    </Box>
                  );
                }}
              />
            </Box>
            <Box height={'12px'} />

            <HStack alignItems={'center'} justifyContent="space-between">
              <AppTypographyBody1>Popular</AppTypographyBody1>
              <Button
                size={'sm'}
                variant="ghost"
                colorScheme="rose"
                onPress={() => {
                  navigation.navigate('exploreFilter');
                }}>
                More
              </Button>
            </HStack>

            <FlatList
              data={[1, 2, 1, 2, 1, 2, 3, 4, 5, 6]}
              renderItem={() => {
                return <CourseCard />;
              }}
            />
          </VStack>
        </Flex>
      </ScrollView>
    </Template>
  );
};
export default Screen;
