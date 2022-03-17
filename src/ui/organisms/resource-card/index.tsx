import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Box, HStack, Avatar, VStack} from 'native-base';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Ripple from 'react-native-material-ripple';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {AppTypographyBody1} from '../../atoms/typography';

export function ResourceCard() {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const MessageInfo = (
    <Box>
      <HStack alignItems={'center'} space="2" justifyContent={'space-between'}>
        <HStack alignItems={'center'} space="2">
          <Avatar size={6} />
          <AppTypographyBody1 style={{color: 'gray', fontWeight: 'bold'}}>
            Joshua Nwafor
          </AppTypographyBody1>
        </HStack>
        <AppTypographyBody1 style={{color: 'gray'}}>
          {new Date().toDateString()}
        </AppTypographyBody1>
      </HStack>
    </Box>
  );

  const Media = (
    <Box style={{aspectRatio: 1 / 1}} bg="rose.500">
      <FastImage
        style={{width: '100%', height: '100%'}}
        source={{uri: 'https://miro.medium.com/max/600/0*npRqA-IodJWs4jae.jpg'}}
      />
    </Box>
  );
  return (
    <Box my="6px">
      <Ripple
        onPress={() => {
          navigation.navigate('viewResource');
        }}>
        <Box
          p="12px"
          bg="white"
          rounded={'md'}
          borderBottomWidth={0.5}
          borderColor="gray.300">
          <VStack space={'2'}>
            {MessageInfo}
            {Media}
            <Box mt={3}>
              <AppTypographyBody1 style={{color: 'black'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae eveniet aperiam nesciunt doloribus blanditiis
                tempora adipisci officiis corporis possimus necessitatibus?
                Eligendi distinctio, sed ratione amet dolore inventore quam
                culpa consectetur.
              </AppTypographyBody1>
            </Box>

            <HStack></HStack>
          </VStack>
        </Box>
      </Ripple>
    </Box>
  );
}
