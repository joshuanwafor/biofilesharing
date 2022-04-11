import {useTheme} from '@react-navigation/native';
import {
  Box,
  HStack,
  Spinner,
  VStack,
} from 'native-base';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TSpace} from '../../../interface/models';
import {getSpaceByCode} from '../../../services/space';
import {AppTypographySubHeading} from '../../atoms/typography';
import {RenderSpaceDetails} from '../space/render-details';

export const SpaceInfoModal = ({
  spaceCode,
  onCancelClose,
  ref,
}: {
  spaceCode: string;
  onCancelClose: () => void;
  ref: React.RefObject<Modalize>;
}) => {
  const theme = useTheme();
  let [space, setSpace] = React.useState<TSpace>();
  let [status, setStatus] = React.useState('loading');

  const setStatusAsLoading = () => setStatus('loading');
  const setStatusAsLoaded = () => setStatus('loaded');
  const setStatusAsInitial = () => setStatus('initial');

  const onOpen = () => {
    ref.current?.open();
  };
  const onClose = () => {
    ref.current?.close();
  };

  const find = () => {
    setStatusAsLoading();
    getSpaceByCode(spaceCode)
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

  const SearchBox = (
    <VStack>
      {status == 'loading' ? (
        <Box py={12}>
          {' '}
          <Spinner size={'lg'} />
        </Box>
      ) : null}
      {space != undefined ? <RenderSpaceDetails space={space} /> : null}
    </VStack>
  );

  React.useEffect(() => {
    find();
  }, []);
  return (
    <React.Fragment>
      <Portal>
        <Modalize
          // adjustToContentHeight={true}
          ref={ref}
          overlayStyle={{
            backgroundColor: 'rgba(20, 20, 20, 0.1)',
          }}
          closeOnOverlayTap={true}
          handlePosition="inside"
          disableScrollIfPossible={true}
          panGestureComponentEnabled={true}
          handleStyle={{
            backgroundColor: 'black',
          }}>
          <Box p="6">
            <VStack space={4}>
              <HStack alignContent={'center'} justifyContent="space-between">
                <AppTypographySubHeading style={{fontWeight: 'bold'}}>
                  Space Details
                </AppTypographySubHeading>
                <Ripple
                  onPress={() => {
                    onCancelClose();
                    onClose();
                  }}>
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
