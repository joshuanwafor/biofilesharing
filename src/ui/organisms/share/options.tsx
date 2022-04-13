import {
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {Box, Button, HStack, Input, VStack} from 'native-base';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographySubHeading,
} from '../../atoms/typography';
import React from 'react';
import FilePickerManager, {FilePickerFile, FilePickerResult} from 'react-native-file-picker';
import {fileManager} from '../../../store/files';
import {ToastAndroid} from 'react-native';

export const ShareOptions = () => {
  let [file, updateFile] = React.useState<FilePickerResult>();
  let [receiver, updateReceiver] = React.useState<string>('');

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const modalRef = React.useRef<Modalize>(null);
  const onOpen = () => {
    modalRef.current?.open();
  };
  const onClose = () => {
    modalRef.current?.close();
  };

  function selectFile() {
    FilePickerManager.showFilePicker(response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
        updateFile(response);
      }
    });
  }
  return (
    <React.Fragment>
      <Button
        colorScheme="blue"
        rounded={'full'}
        onPress={() => {
          onOpen();
        }}
        leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
        Share File
      </Button>
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
                  Share File
                </AppTypographySubHeading>
                <Ripple onPress={() => onClose()}>
                  <Ionicons name="close" size={24} />
                </Ripple>
              </HStack>

              <Box>
                <VStack space="4">
                  <Box mt="12px">
                    <Input
                      variant={'filled'}
                      placeholder="Share file wite"
                      keyboardType="email-address"
                      fontSize={'lg'}
                      p="18px"
                      value={receiver}
                      onChangeText={text => {
                        updateReceiver(text);
                      }}
                    />
                    <AppTypographyCaption>
                      Email address of receipient
                    </AppTypographyCaption>
                  </Box>
                  {file != undefined ? (
                    <AppTypographyBody1>{file?.fileName}</AppTypographyBody1>
                  ) : null}
                  <HStack space="2">
                    <Button
                      flex={1}
                      colorScheme="blue"
                      p="20px"
                      rightIcon={
                        <Ionicons name="pin-outline" color="white" size={18} />
                      }
                      onPress={() => {
                        selectFile();
                      }}>
                      {file == undefined ? 'Select File' : 'Update file'}
                    </Button>
                    {file != undefined ? (
                      <Button
                        flex={1}
                        colorScheme="red"
                        p="20px"
                        rightIcon={
                          <Ionicons
                            name="arrow-redo-outline"
                            color="white"
                            size={18}
                          />
                        }
                        onPress={() => {
                          if (file == undefined) return;
                          fileManager.share(file, receiver);
                          ToastAndroid.show('Uploading file', 1000);
                          onClose();
                          updateFile(undefined);
                          updateReceiver('');
                        }}>
                        Share
                      </Button>
                    ) : null}
                  </HStack>
                  <AppTypographyCaption style={{textAlign: 'center'}}>
                    Maximum file size:5MB
                  </AppTypographyCaption>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Modalize>
      </Portal>
    </React.Fragment>
  );
};
