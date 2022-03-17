import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {getAppColors} from '../../style/theme';
import {useTheme} from 'native-base';
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
      <StatusBar
        backgroundColor={theme.colors.rose[900]}
        barStyle={'light-content'}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 0,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.rose[900],
        }}>
        {show_back == true ? (
          <Ionicons
            name="arrow-back-outline"
            size={24}
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              padding: 8,
              backgroundColor: 'rgba(200,200,200,.2)',
              borderRadius: 50,
              color: 'white',
            }}
          />
        ) : null}
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
          {title}
        </Text>
        {right_icons ?? <View />}
      </View>
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
