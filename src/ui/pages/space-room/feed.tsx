import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Avatar, Box, HStack, VStack} from 'native-base';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {AppTypographyBody1} from '../../atoms/typography';

export const SpaceRoomFeed = () => {
  return (
    <Box px="0px">
      {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6].map(res => {
        return <ResourceCard />;
      })}
    </Box>
  );
};

function ResourceCard() {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const MessageInfo = (
    <Box>
      <HStack alignItems={'center'} space="2">
        <HStack>
          <Avatar size={6} />
        </HStack>
        <AppTypographyBody1 style={{color: 'gray'}}>
          {new Date().toDateString()}
        </AppTypographyBody1>
      </HStack>
    </Box>
  );

  const Media = <Box style={{aspectRatio: 1 / 1}} bg="rose.500"></Box>;
  return (
    <Box my="6px">
      <Ripple
        onPress={() => {
          navigation.navigate('viewResource');
        }}>
        <Box p="12px" bg="white" rounded={'md'}>
          <VStack space={'2'}>
            {MessageInfo}
            {Media}
            <AppTypographyBody1 style={{color: 'black'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae eveniet aperiam nesciunt doloribus blanditiis tempora
              adipisci officiis corporis possimus necessitatibus? Eligendi
              distinctio, sed ratione amet dolore inventore quam culpa
              consectetur.
            </AppTypographyBody1>
          </VStack>
        </Box>
      </Ripple>
    </Box>
  );
}
