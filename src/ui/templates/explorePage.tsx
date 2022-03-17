import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {getAppColors} from '../../style/theme';
import {Avatar, Box, HStack, Icon, useTheme} from 'native-base';
import {AppTypographyBody1} from '../atoms/typography';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
const Screen: React.FC<{
  right_icons?: React.ReactNode;
  bottom?: React.ReactNode;
  title: string;
  show_back?: boolean;
  headerBackground?: string;
}> = ({
  children,
  right_icons,
  title,
  show_back = false,
  bottom,
  headerBackground,
}) => {
  let navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  let theme = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={theme.colors.rose[900]}
        barStyle={'light-content'}
      />
      <HStack p="4" space={2} alignItems="center" bg={'rose.900'}>
        <Avatar
          size={'10'}
          source={{
            uri: 'https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg',
          }}
        />

        <Box
          flex={1}
          rounded="md"
          borderWidth={1}
          borderColor="rgba(200,200,200,.8)"
          overflow={'hidden'}>
          <Ripple
            onPress={() => {
              navigation.navigate('search');
              console.log('ok');
            }}>
            <Box p="12px" bg="rgba(10,10,10,.1)">
              <AppTypographyBody1 style={{color: 'rgba(200,200,200,.8)'}}>
                Search VSchool
              </AppTypographyBody1>
            </Box>
          </Ripple>
        </Box>

        <IonicIcons
          name="filter-outline"
          size={18}
          style={{padding: 12}}
          color="white"
        />
      </HStack>
      <View
        style={{
          flex: 1,
        }}>
        {children}
      </View>
    </View>
  );
};

export default Screen;
