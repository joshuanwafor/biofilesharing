import {Box, Button, HStack, Tag, useTheme, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographyHeading,
  AppTypographySubHeading,
} from '../../atoms/typography';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import Ripple from 'react-native-material-ripple';

export function CourseCard() {
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
          navigation.navigate('courseDetails');
        }}>
        <HStack space={'12px'} p="12px">
          <VStack flex={1} space="12px">
            <Box>
              <AppTypographyBody1>Category</AppTypographyBody1>
              <AppTypographyHeading>Title goes here ohh</AppTypographyHeading>

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
        <VStack p="12px"  borderTopWidth={0.5}
          borderColor="gray.300">
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
          <AppTypographyBody1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quae
            facilis blanditiis voluptas
          </AppTypographyBody1>
        </VStack>
      </Ripple>
    </Box>
  );
}
