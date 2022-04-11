import {Avatar, Box, Button, HStack, View, VStack} from 'native-base';
import {space} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TSpace} from '../../../interface/models';
import {subscriptionsManager} from '../../../store/mysubscriptions';
import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographyHeading,
} from '../../atoms/typography';

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

const Bottom = () => {
  return (
    <View>
      <HStack space={4}>
        <Button
          flex={1}
          variant="solid"
          colorScheme="rose"
          rounded="full"
          onPress={() => {}}>
          Enroll
        </Button>
        <Button variant={'subtle'} colorScheme="gray" rounded="full">
          <Ionicons name="ellipsis-vertical-outline" size={20} />
        </Button>
      </HStack>
    </View>
  );
};

export const RenderSpaceDetails = ({space}: {space: TSpace}) => {
  const Body = () => {
    const Instructors = () => {
      return (
        <HStack
          space="8px"
          alignItems={'center'}
          bg="gray.50"
          p="16px"
          borderBottomWidth={1}
          borderColor="gray.200">
          <Avatar size={'8'} />
          <AppTypographyBody1 style={{fontWeight: 'bold', color: 'black'}}>
            Joshua Nwafor
          </AppTypographyBody1>
          <Box
            rounded={'sm'}
            bg="gray.200"
            p="4px"
            px="8px"
            overflow={'hidden'}>
            <AppTypographyCaption style={{fontWeight: 'bold'}}>
              Host
            </AppTypographyCaption>
          </Box>
        </HStack>
      );
    };
    return (
      <VStack>
        <Instructors />
        <Box
          bg="white"
          p="24px"
          overflow="hidden"
          borderColor={'gray.400'}
          borderBottomLeftRadius={24}
          borderBottomRightRadius={24}>
          <VStack space={2}>
            <AppTypographyHeading>{space?.title}</AppTypographyHeading>
            <AppTypographyBody1>Course Category</AppTypographyBody1>
            <AppTypographyBody1>{space?.body}</AppTypographyBody1>
            <HStack space={8}>
              <SpaceInfoTag icon="cash-outline" val="FREE" />
              <SpaceInfoTag icon="chatbubbles-outline" val="10" />
              <SpaceInfoTag icon="heart-outline" val="100" />
              <SpaceInfoTag icon="share-social-outline" val="Share" />
            </HStack>

            <Button
              p="12px"
              colorScheme="rose"
              onPress={() => {
                subscriptionsManager.subscribe(space);
              }}>
              Enroll
            </Button>
          </VStack>
        </Box>
      </VStack>
    );
  };

  return (
    <Box>
      <Body />
    </Box>
  );
};
