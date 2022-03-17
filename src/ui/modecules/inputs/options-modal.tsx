import {
  AppTypographyHeading,
  AppTypographySubHeading,
} from '../../atoms/typography';
import React, {Ref, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Portal} from 'react-native-portalize';

type Ty = {
  innerRef: React.RefObject<Modalize>;
  selectLabel: string;
  selected?: string;
  options: {label: string; id: string}[];
  onSelect?: (item: string) => void;
};

export const AppOptionsModal = React.memo(function ({
  innerRef,
  selectLabel,
  selected,
  onSelect,
  options,
}: Ty) {
  const animated = useRef(new Animated.Value(0)).current;

  const onOpen = () => {
    innerRef.current?.open();
  };

  const onClose = () => {
    innerRef.current?.close();
  };

  return (
    <Portal>
      <Modalize
        ref={innerRef}
        panGestureAnimatedValue={animated}
        onOverlayPress={() => innerRef.current?.close()}
        closeOnOverlayTap={true}
        adjustToContentHeight>
        <View>
          <View style={{padding: 16, paddingTop: 0}}>
            <View style={{}}>
              <View style={myStyles.selectPanelHeaderContainer}>
                <AppTypographyHeading>
                  {selectLabel ?? 'Select'}
                </AppTypographyHeading>
                <Ionicons
                  name="close"
                  size={18}
                  onPress={() => onClose()}
                  style={{
                    padding: 12,
                    color: 'black',
                    backgroundColor: 'rgba(220,180,180,.3)',
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>

            <View style={{padding: 0}}>
              {options.map((item, i) => {
                let icon = <Ionicons name={'ellipse-outline'} size={18} />;
                if (item.id == selected)
                  icon = <Ionicons name="checkmark-circle-outline" size={18} />;
                return (
                  <Ripple
                    key={i}
                    onPress={() => {
                      if (onSelect != undefined) {
                        onSelect(item.id);
                      }
                      onClose();
                    }}>
                    <View style={myStyles.selectListItem}>
                      <AppTypographySubHeading
                        style={{
                          fontWeight: '500',
                          color: 'rgba(80,80,80,.9)',
                        }}>
                        {item.label}
                      </AppTypographySubHeading>
                      <Ionicons
                        name={
                          item.id == selected
                            ? 'checkmark-circle-outline'
                            : 'ellipse-outline'
                        }
                        size={18}
                      />
                    </View>
                  </Ripple>
                );
              })}
            </View>
          </View>
        </View>
      </Modalize>
    </Portal>
  );
});

let myStyles = StyleSheet.create({
  selectPanelHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  selectListItem: {
    paddingHorizontal: 0,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
