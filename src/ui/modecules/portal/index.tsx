import {Box} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {AppTypographySubHeading} from '../../atoms/typography';

export const AppPortal = ({ref}: {ref: any}) => {
  return (
    <Portal>
      <Modalize
        ref={ref}
        overlayStyle={{
          backgroundColor: 'rgba(20, 20, 20, 0.4)',
        }}
        modalStyle={{
          elevation: 0,
          shadowColor: 'transparent',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0,
          shadowRadius: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
          <AppTypographySubHeading style={{fontWeight: 'bold'}}>
            Options
          </AppTypographySubHeading>
        </Box>
      </Modalize>
    </Portal>
  );
};
