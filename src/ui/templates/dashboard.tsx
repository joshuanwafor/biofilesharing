import React from 'react';
import {Dimensions, ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {AppTypographyHeading} from '../atoms/typography';
import {Avatar, Box, HStack, useTheme} from 'native-base';
import {Host} from 'react-native-portalize';
import {SearchModal} from '../organisms/search-modal';
import FastImage from 'react-native-fast-image';
import Logo from './vSpaces.svg';
import {SvgUri} from 'react-native-svg';
const Screen: React.FC<{
  right_icons?: React.ReactNode;
  bottom?: React.ReactNode;
  title: string;
  show_back?: boolean;
}> = ({children, right_icons, title, show_back = false, bottom}) => {
  let navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  let theme = useTheme();
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={theme.colors.rose[800]}
        barStyle={'light-content'}
      />
      <Box bg="white" borderBottomWidth={1} borderColor="gray.200" pt={'4px'}>
        <HStack
          space={4}
          p="0px"
          px="24px"
          py="4px"
          justifyContent={'space-between'}
          alignItems={'center'}
          alignContent="center">
          <Logo width={100} height={50} />
          <Avatar
            size={'10'}
            borderWidth={2}
            borderColor="rose.900"
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
        </HStack>
      </Box>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          backgroundColor: 'white',
          flex: 1,
        }}>
        {children}
      </View>
    </View>
  );
};
export default Screen;
