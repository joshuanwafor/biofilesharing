import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRootNavigation from './navigation/app';
import {StatusBar, View} from 'react-native';
import {Host} from 'react-native-portalize';
import Auth from './../ui/pages/auth';
import auth from '@react-native-firebase/auth';
import {observer} from 'mobx-react';
import {userManager} from '../store/user';

const Screen: React.FC<{}> = () => {
  //
  React.useEffect(() => {
    userManager.init(); //
  }, []);
  //

  //
  if (userManager.user !== undefined) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      </View>
    );
  }
  //

  return (
    <Host>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <AppRootNavigation />
        </NavigationContainer>
      </View>
    </Host>
  );
};

export default observer(Screen);
