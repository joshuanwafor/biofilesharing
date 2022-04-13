import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Box, HStack, Avatar, VStack, Button} from 'native-base';
import React from 'react';
import {compareAsc, format, formatRelative} from 'date-fns';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {TResource} from '../../../interface/models';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {AppTypographyBody1} from '../../atoms/typography';
import {RenderImages} from '../images/render-images';
import {userManager} from '../../../store/user';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ShareOptions} from './options';

export function ShareFileComp() {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const modalRef = React.useRef<Modalize>(null);
  const onOpen = () => {
    modalRef.current?.open();
  };
  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <Box>
      <ShareOptions />
    </Box>
  );
}
