import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRootNavigation from './navigation/app';
import {StatusBar, View} from 'react-native';
import Auth from './../ui/pages/auth';
import {observer} from 'mobx-react';
import {userManager} from '../store/user';
import auth from '@react-native-firebase/auth';

const Screen: React.FC<{}> = () => {
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <AppRootNavigation />
      </NavigationContainer>
    </View>
  );
};

export default observer(Screen);
