import {
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {Box, HStack, theme, View, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TResource} from '../../../interface/models';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {spaceRoomManager} from '../../../store/room';
import {AppTypographySubHeading} from '../../atoms/typography';
import spaceRoom from '../../pages/space-room';

export const ResourceCardOptions = ({resource}: {resource: TResource}) => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const modalRef = React.useRef<Modalize>(null);
  const onOpen = () => {
    modalRef.current?.open();
  };
  const onClose = () => {
    modalRef.current?.close();
  };
  function OptionComp({title, onPress}: {title: string; onPress: () => void}) {
    return (
      <Ripple
        onPress={() => {
          onPress();
          onClose();
        }}>
        <Box py="16px">
          <AppTypographySubHeading>{title}</AppTypographySubHeading>
        </Box>
      </Ripple>
    );
  }

  return (
    <React.Fragment>
      <Ripple
        onPress={() => {
          onOpen();
        }}>
        <Box p="8px">
          <Ionicons name="ellipsis-vertical-outline" />
        </Box>
      </Ripple>
      <Portal>
        <Modalize
          ref={modalRef}
          overlayStyle={{
            backgroundColor: 'rgba(20, 20, 20, 0.1)',
          }}
          closeOnOverlayTap={true}
          handlePosition="inside"
          disableScrollIfPossible={true}
          panGestureComponentEnabled={true}
          handleStyle={{
            backgroundColor: 'black',
          }}
          adjustToContentHeight={true}>
          <Box p="6">
            <VStack>
              <HStack alignContent={'center'} justifyContent="space-between">
                <AppTypographySubHeading style={{fontWeight: 'bold'}}>
                  Options
                </AppTypographySubHeading>
                <Ripple onPress={() => onClose()}>
                  <Ionicons name="close" size={24} />
                </Ripple>
              </HStack>

              <OptionComp
                title="Delete"
                onPress={() => {
                  spaceRoomManager.delete(resource.id, resource.space_id);
                }}
              />
              <OptionComp
                title="Edit"
                onPress={() => {
                  navigation.navigate('editResource', {
                    resource: resource,
                  });
                }}
              />
              <OptionComp
                title="View"
                onPress={() => {
                  navigation.navigate('viewResource', {
                    res: resource,
                  });
                }}
              />
            </VStack>
          </Box>
        </Modalize>
      </Portal>
    </React.Fragment>
  );
};
