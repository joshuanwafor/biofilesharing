import React from 'react';
import {MainAppNavigationRoutes} from '../../interface/navigation';
import Profile from '../../ui/pages/account/profile';
import Address from '../../ui/pages/account/address';
import Verification from '../../ui/pages/account/verification';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseDetails from '../../ui/pages/space-details/index';
import MainNavigation from './app_tabs';
import {SearchScreen} from '../../ui/pages/explore/search-screen';
import SpaceRoom from '../../ui/pages/space-room';
import SpaceDetailsByCode from '../../ui/pages/space-details/code';
import NewResource from '../../ui/pages/space-room/edit/new-resource';
import EditResource from '../../ui/pages/space-room/edit/edit-body';
import Bank from '../../ui/pages/account/bank_info';
import ExploreFilter from '../../ui/pages/explore/filter';
import ViewResource from '../../ui/pages/space-room/view-resource';
import NewSpace from '../../ui/pages/edit-space';
import {Host} from 'react-native-portalize';
import {useAppLoader} from '../../hooks/loader';

const Stack = createNativeStackNavigator<MainAppNavigationRoutes>();

const Screen: React.FC<{}> = () => {
  useAppLoader();
  return (
    <Host>
      <Stack.Navigator
        initialRouteName="dashboard"
        defaultScreenOptions={{headerShown: false}}>
        <Stack.Screen
          name="dashboard"
          component={MainNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="newResource"
          component={NewResource}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="editResource"
          component={EditResource}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="exploreFilter"
          component={ExploreFilter}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="account"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="address"
          component={Address}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="spaceDetails"
          component={CourseDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="spaceDetailsByCode"
          component={SpaceDetailsByCode}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="spaceRoom"
          component={SpaceRoom}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="editSpace"
          component={NewSpace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="viewResource"
          component={ViewResource}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="bankAccount"
          component={Bank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </Host>
  );
};

export default Screen;
