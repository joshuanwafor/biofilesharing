import {Box, Button, HStack, Tag, useTheme, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {
  AppTypographyBody1,
  AppTypographySubHeading,
  AppTypographyCaption,
  AppTypographyHeading,
} from '../../atoms/typography';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import Ripple from 'react-native-material-ripple';

export function MainCourseCard() {
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
          navigation.navigate('courseDetails');
        }}>
        <Box>
          <Box
            // style={{aspectRatio: 1 / 0.8}}
            bg="gray.300">
            {/* <FastImage
            style={{width:"100%", height:"100%", position:"absolute"}}
              source={{
                uri: 'https://infoguidenigeria.com/wp-content/uploads/2021/07/online-courses.jpg',
              }}
            /> */}
            <VStack flex={1} space="12px" justifyContent={'flex-end'} h="100%">
              <Box bg="white" p="12px">
                <AppTypographyBody1>Category</AppTypographyBody1>
                <AppTypographyHeading>
                  Title goes here ohhdsd fkdkf dfd
                </AppTypographyHeading>

                <HStack space={'2'}>
                  <AppTypographyBody1>Free</AppTypographyBody1>
                  <AppTypographyBody1>|</AppTypographyBody1>
                  <AppTypographyBody1>50+ Subscribers</AppTypographyBody1>
                  {/* <AppTypographyBody1>|</AppTypographyBody1>
                  <AppTypographyBody1>50+ Likes</AppTypographyBody1> */}
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Box>

        <VStack
          p="12px"
          borderTopWidth={0.5}
          borderColor="gray.300">
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
            <AppTypographyBody1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              quae facilis blanditiis voluptas
            </AppTypographyBody1>
          </VStack>
        </VStack>
        {/* <HStack
          space="12px"
          alignItems={'center'}
          justifyContent="space-between"
          p="12px"
          bg="gray.50">
          <AppTypographySubHeading
            style={{fontSize: 16, color: theme.colors.rose[900]}}>
            Free
          </AppTypographySubHeading>
          <Ionicons name="arrow-forward-outline" size={20} />
        </HStack> */}
      </Ripple>
    </Box>
  );
}
