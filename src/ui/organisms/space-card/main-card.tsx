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

export function MainCourseCard({space}: {space: TSpace}) {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  const theme = useTheme();
  return (
    <Box
      my={'12px'}
      bg="white"
      shadow={'1'}
      borderWidth={0.5}
      borderColor="gray.300"
      rounded={'lg'}
      overflow="hidden">
      <Ripple
        onPress={() => {
          navigation.navigate('spaceDetails', {space: space});
        }}>
        <Box>
          <Box bg="gray.300">
            <VStack flex={1} space="12px" justifyContent={'flex-end'} h="100%">
              <Box bg="white" p="12px">
                <AppTypographyBody1>Category</AppTypographyBody1>
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
          </Box>
        </Box>

        <VStack p="12px" borderTopWidth={0.5} borderColor="gray.300">
          <VStack>
            <HStack space="8px">
              <AppTypographyBody1
                style={{fontWeight: 'bold', color: theme.colors.rose[900]}}>
                Joshua Nwafor
              </AppTypographyBody1>
              <Box
                rounded={'sm'}
                bg="gray.200"
                p="4px"
                px="6px"
                overflow={'hidden'}>
                <AppTypographyCaption style={{fontWeight: 'bold'}}>
                  Host
                </AppTypographyCaption>
              </Box>
            </HStack>
            <AppTypographyBody1
              numberOfLines={3}
              ellipsizeMode="tail"
              style={{height: 18 * 3}}>
              {space.body}
            </AppTypographyBody1>
          </VStack>
        </VStack>
      </Ripple>
    </Box>
  );
}
