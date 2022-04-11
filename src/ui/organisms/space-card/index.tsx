import {Box, Button, HStack, Tag, useTheme, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographyHeading,
} from '../../atoms/typography';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import Ripple from 'react-native-material-ripple';
import {TSpace} from '../../../interface/models';
import {HostArea} from './host-card';

export function CourseCard({
  isOwner = false,
  space,
}: {
  isOwner: boolean;
  space: TSpace;
}) {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  const theme = useTheme();
  return (
    <Box
      my={'12px'}
      bg="white"
      borderWidth={0.5}
      borderColor="gray.300"
      rounded={'lg'}
      overflow="hidden">
      <Ripple
        onPress={() => {
          if (isOwner) {
            navigation.navigate('spaceRoom', {
              space: space,
            });
          } else {
            navigation.navigate('spaceDetails', {space: space});
          }
        }}>
        <HStack space={'12px'} p="12px">
          <VStack flex={1} space="12px">
            <Box>
              {/* <AppTypographyBody1>Other</AppTypographyBody1> */}
              <AppTypographyHeading
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{fontSize: 18, height: 18 * 2.6}}>
                {space.title}
              </AppTypographyHeading>

              <HStack space={'2'}>
                <AppTypographyBody1>Free</AppTypographyBody1>
                <AppTypographyBody1>|</AppTypographyBody1>
                <AppTypographyBody1>50+ Subscribers</AppTypographyBody1>
              </HStack>
            </Box>
          </VStack>
          <Box>
            <Box
              style={{aspectRatio: 1 / 1, width: 70}}
              rounded="md"
              bg="gray.300"></Box>
          </Box>
        </HStack>
        <VStack p="12px" borderTopWidth={0.5} borderColor="gray.300">
          <HostArea userID={space.publisher_id??""} />
          <AppTypographyBody1 numberOfLines={3} ellipsizeMode="tail">
            {space.body}
          </AppTypographyBody1>
        </VStack>
      </Ripple>
    </Box>
  );
}
