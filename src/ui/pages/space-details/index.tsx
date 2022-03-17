import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographyHeading,
  AppTypographySubHeading,
} from '../../atoms/typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Template from '../../templates/standardPage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '@interface/navigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Box, Button, HStack, VStack} from 'native-base';

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
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const Bottom = () => {
    return (
      <View>
        <HStack space={4}>
          <Button
            flex={1}
            variant="solid"
            colorScheme="rose"
            rounded="full"
            onPress={() => {
              navigation.navigate('spaceRoom');
            }}>
            Enroll
          </Button>
          <Button variant={'subtle'} colorScheme="gray" rounded="full">
            <Ionicons name="ellipsis-vertical-outline" size={20} />
          </Button>
        </HStack>
      </View>
    );
  };

  const Body = () => {
    const Instructors = () => {
      return (
        <HStack>
          <HStack space={2} flex={1}>
            {[1, 2, 3].map(v => (
              <Avatar
                size="8"
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
                }}
              />
            ))}
          </HStack>
        </HStack>
      );
    };
    return (
      <VStack>
        <Box
          bg="white"
          p="24px"
          borderBottomWidth={1}
          borderRightWidth={1}
          borderLeftWidth={1}
          overflow="hidden"
          borderColor={'gray.400'}
          borderBottomLeftRadius={24}
          borderBottomRightRadius={24}>
          <VStack space={2}>
            <Instructors />

            <AppTypographyHeading>Space Title goes here</AppTypographyHeading>
            <AppTypographyBody1>Course Category</AppTypographyBody1>
            <AppTypographyBody1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              quisquam ipsum sed libero consectetur similique, iusto unde at
              veniam, dignissimos in laboriosam amet animi facilis
              necessitatibus consequuntur eum minus tenetur.
            </AppTypographyBody1>
            <HStack space={8}>
              <SpaceInfoTag icon="cash-outline" val="FREE" />
              <SpaceInfoTag icon="chatbubbles-outline" val="10" />
              <SpaceInfoTag icon="heart-outline" val="100" />
              <SpaceInfoTag icon="share-social-outline" val="Share" />
            </HStack>
          </VStack>
        </Box>

        <Box p="24px" py="8px">
          <AppTypographyBody1>PUBLISHED RESOURCES</AppTypographyBody1>
        </Box>
        <VStack px="12px">
          {[1, 2, 3, 4, 5, 6, 7, 2].map((res, index) => {
            return (
              <HStack
                p="12px"
                space={6}
                bg="white"
                my="4px"
                rounded={'md'}
                borderWidth={0.5}
                borderColor="gray.200"
                shadow="md"
                alignItems={'center'}>
                <Box
                  borderWidth={0.5}
                  borderColor="gray.500"
                  p="4px"
                  px="8px"
                  rounded={'sm'}>
                  <AppTypographyCaption>{index + 1}</AppTypographyCaption>
                </Box>
                <AppTypographySubHeading>
                  Title goes here
                </AppTypographySubHeading>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    );
  };

  return (
    <Template title="Title goes here" show_back bottom={<Bottom />}>
      <Body />
    </Template>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
    backgroundColor: 'red',
    height: '100%',
  },
});

export default Screen;
