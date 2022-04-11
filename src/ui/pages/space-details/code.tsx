import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Template from '../../templates/standardPage';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Avatar, Box, Button, HStack, Spinner, VStack} from 'native-base';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {TSpace} from '../../../interface/models';
import {getSpaceByCode} from '../../../services/space';
import {RenderSpaceDetails} from '../../organisms/space/render-details';

const Tab = createMaterialTopTabNavigator();

const Screen: React.FC = () => {
  const theme = useTheme();
  const {
    params: {code},
  } = useRoute<RouteProp<MainAppNavigationRoutes, 'spaceDetailsByCode'>>();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  let [space, setSpace] = React.useState<TSpace>();
  let [status, setStatus] = React.useState('loading');

  const setStatusAsLoading = () => setStatus('loading');
  const setStatusAsLoaded = () => setStatus('loaded');
  const setStatusAsInitial = () => setStatus('initial');

  const find = () => {
    setStatusAsLoading();
    getSpaceByCode(code)
      .then(res => {
        if (res != undefined) {
          setSpace(res);
          setStatusAsLoaded();
        }
        setStatusAsLoaded();
      })
      .catch(() => {
        setStatusAsLoaded();
      });
  };

  React.useEffect(() => {
    find();
  });
  return (
    <Template title="Title goes here" show_back>
      {space == undefined ? (
        <Box py={12}>
          {' '}
          <Spinner size={'lg'} />
        </Box>
      ) : (
        <RenderSpaceDetails space={space} />
      )}
    </Template>
  );
};

export default Screen;
