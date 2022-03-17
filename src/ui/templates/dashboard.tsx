import React from 'react';
import {Dimensions, ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {getAppColors} from '../../style/theme';
import {AppTypographyBody1, AppTypographyHeading} from '../atoms/typography';
import {Avatar, Box, HStack, useTheme} from 'native-base';

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
        backgroundColor={theme.colors.rose[900]}
        barStyle={'light-content'}
      />
      <Box bg="rose.900">
        <HStack space={4} p="12px" alignItems={'center'}>
          <Avatar
            size={'10'}
            color=""
            source={{
              uri: 'https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg',
            }}
          />
          <View>
            <AppTypographyHeading style={{color: 'white'}}>
              MyVSchool...
            </AppTypographyHeading>
          </View>
        </HStack>
      </Box>
      <ScrollView style={{}}>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 0,
            backgroundColor: 'white',
            flex: 1,
          }}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};
export default Screen;
