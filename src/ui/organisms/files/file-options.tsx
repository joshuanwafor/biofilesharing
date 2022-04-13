import {
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {Box, Button, HStack, VStack} from 'native-base';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {AppTypographySubHeading} from '../../atoms/typography';
import TouchID from 'react-native-touch-id';
import {Alert, Linking, Platform} from 'react-native';
import {checkBiometricSupportednEnrolled} from '../../../services/fingerprint';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export const FileOptions = () => {
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

  async function authenticate() {
    try {
      let isFingerPrintSupported = await checkBiometricSupportednEnrolled();

      if (isFingerPrintSupported === true) {
        TouchID.authenticate('', optionalConfigObject)
          .then((success: any) => {
            Alert.alert('Alert', 'Authenticated Successfully', [
              {
                text: 'Open File',
                onPress: () => {},
              },
            ]);
          })
          .catch((error: any) => {
            console.log(error);
            Alert.alert('Authentication Failed');
          });
      } else {
        //show alert "TouchID has no enrolled fingers. Please go to settings and enable fingerprint on this device." that we returned from the service
        Alert.alert('Alert', isFingerPrintSupported, [
          {
            text: 'Ok',
            onPress: () => {
              //redirect to settings
              Platform.OS === 'ios'
                ? Linking.openURL('app-settings:')
                : 'AndroidOpenSettings.securitySettings()'; // Open security settings menu
            },
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <Ripple
        onPress={() => {
          onOpen();
        }}>
        <Box p="8px">
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
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
                  File Options
                </AppTypographySubHeading>
                <Ripple onPress={() => onClose()}>
                  <Ionicons name="close" size={24} />
                </Ripple>
              </HStack>
              <OptionComp
                title="View"
                onPress={() => {
                  authenticate();
                }}
              />
              <OptionComp title="Manage people" onPress={() => {}} />
              <OptionComp title="Delete" onPress={() => {}} />
              <OptionComp
                title="Download"
                onPress={() => {
                  authenticate()
                }}
              />
            </VStack>
          </Box>
        </Modalize>
      </Portal>
    </React.Fragment>
  );
};
