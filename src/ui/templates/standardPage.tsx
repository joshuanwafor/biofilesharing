import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/core';
import {MainAppNavigationRoutes} from '../../interface/navigation';

import {useTheme} from 'native-base';
import {Host} from 'react-native-portalize';
import {AppIconButton} from '../atoms/buttons';
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
    <Host>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor={theme.colors.blue[500]}
          barStyle={'light-content'}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
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
              color={theme.colors.blue[500]}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ) : null}
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            {title}
          </Text>
          {right_icons ?? <View />}
        </View>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 0,
            flex: 1,
          }}>
          {children}
        </View>
        {bottom != undefined ? (
          <View
            style={{
              padding: 12,
              flex: 0,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              backgroundColor: 'white',
              elevation: 5,
            }}>
            {bottom}
          </View>
        ) : null}
      </View>
    </Host>
  );
};

export default Screen;
