import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Box, HStack, Avatar, VStack} from 'native-base';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Ripple from 'react-native-material-ripple';
import {TResource} from '../../../interface/models';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {AppTypographyBody1} from '../../atoms/typography';
import {RenderImages} from '../images/render-images';

export function ResourceCard({item}: {item: TResource}) {
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

  return (
    <Box my="6px">
      <Ripple
        onPress={() => {
          navigation.navigate('viewResource', {res: item});
        }}>
        <Box
          p="12px"
          bg="white"
          rounded={'md'}
          borderBottomWidth={0.5}
          borderColor="gray.300">
          <VStack space={'2'}>
            {MessageInfo}
            {item.images.length >= 1 ? (
              <RenderImages images={item.images} enableZoom={false} />
            ) : null}
            <Box mt={3}>
              <AppTypographyBody1 style={{color: 'black'}}>
                {item.body ?? 'My body goes here'}
              </AppTypographyBody1>
            </Box>
            <HStack></HStack>
          </VStack>
        </Box>
      </Ripple>
    </Box>
  );
}
