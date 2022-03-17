import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import {getAppColors} from '../../style/theme';
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
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={headerBackground ?? 'white'}
        barStyle={'dark-content'}
      />
      <ScrollView
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          backgroundColor: '#F5F5F5',
          flex: 1,
        }}>
        {children}
      </ScrollView>
      {bottom != undefined ? (
        <View
          style={{
            padding: 12,
            flex: 0,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: 'white',
            elevation: 5,
            // borderWidth: 1,
            // borderColor: 'rgba(200,200,200,.5)',
            // borderBottomWidth: 0,
          }}>
          {bottom}
        </View>
      ) : null}
    </View>
  );
};

export default Screen;
