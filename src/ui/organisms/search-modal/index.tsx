import {useTheme} from '@react-navigation/native';
import {
  Box,
  Button,
  HStack,
  Input,
  Spinner,
  theme,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TSpace} from '../../../interface/models';
import {getSpaceByCode} from '../../../services/space';
import {AppTypographySubHeading} from '../../atoms/typography';
import {CourseCard} from '../space-card';

export const SearchModal = () => {
  const theme = useTheme();
  let [code, setCode] = React.useState('');
  let [space, setSpace] = React.useState<TSpace>();
  let [status, setStatus] = React.useState('initial');

  const setStatusAsLoading = () => setStatus('loading');
  const setStatusAsLoaded = () => setStatus('loaded');
  const setStatusAsInitial = () => setStatus('initial');

  const modalRef = React.useRef<Modalize>(null);
  const onOpen = () => {
    modalRef.current?.open();
  };
  const onClose = () => {
    modalRef.current?.close();
  };

  const find = () => {
    setStatusAsLoading();
    getSpaceByCode(code)
      .then(res => {
        if (res != undefined) {
          setSpace(res);
        }
        setStatusAsLoaded();
      })
      .catch(() => {
        setStatusAsLoaded();
      });
  };

  const SearchBox = (
    <VStack>
      <Input
        variant={'filled'}
        fontFamily="AvenirNext-Medium"
        _focus={{borderColor: 'gray.300'}}
        rounded={'2xl'}
        fontSize={16}
        bg="gray.100"
        autoFocus
        InputRightElement={
          <Button
            variant={'ghost'}
            colorScheme="gray"
            onPress={() => {
              find();
            }}>
            Search
          </Button>
        }
      />

      <Box py={12}>{status == 'loading' ? <Spinner size={'lg'} /> : null}</Box>

      {space != undefined ? <CourseCard space={space} isOwner={false} /> : null}
    </VStack>
  );

  return (
    <React.Fragment>
      <Ripple
        onPress={() => {
          onOpen();
        }}>
        <Box>
          <Ionicons name="search-outline" size={24} />
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
            <VStack space={4}>
              <HStack alignContent={'center'} justifyContent="space-between">
                <AppTypographySubHeading style={{fontWeight: 'bold'}}>
                  Search Space By ID
                </AppTypographySubHeading>
                <Ripple onPress={() => onClose()}>
                  <Ionicons name="close" size={24} />
                </Ripple>
              </HStack>
              {SearchBox}
            </VStack>
          </Box>
        </Modalize>
      </Portal>
    </React.Fragment>
  );
};
