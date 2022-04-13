import React from 'react';
import {Alert, Platform, Linking} from 'react-native';
import TouchID from 'react-native-touch-id';
import {checkBiometricSupportednEnrolled} from '../services/fingerprint';

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

export function useBiometrics() {
  React.useEffect(() => {
    (async () => {
      let isFingerPrintSupported = await checkBiometricSupportednEnrolled();

      if (isFingerPrintSupported === true) {
        //fingerprint is supported and enrolled
        //TODO: we’ll work here in the next step
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
    })();
  });
}
