import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {getAppColors} from '../../style/theme';
import {Box, useTheme} from 'native-base';
import {AppIconButton} from '../atoms/buttons';
const Screen: React.FC<{
  right_icons?: React.ReactNode;
  bottom?: React.ReactNode;
  title: string;
  show_back?: boolean;
  headerBackground?: string;
}> = ({children, right_icons, title, show_back = false}) => {
  let theme = useTheme();
  let navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
       <StatusBar backgroundColor={theme.colors.rose[800]} barStyle={'light-content'} />

      <Box
        borderBottomWidth={1}
        borderColor="gray.200"
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 0,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {show_back == true ? (
          <AppIconButton
            name={'arrow-back-outline'}
            color={theme.colors.rose[800]}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ) : null}
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          {title}
        </Text>
        {right_icons ?? <View />}
      </Box>
      <ScrollView
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          backgroundColor: '#F5F5F5',
          flex: 1,
        }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default Screen;
