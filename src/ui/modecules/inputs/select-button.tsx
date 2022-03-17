import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  View,
  TextInput,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AppTypographyBody1,
  AppTypographyHeading,
  AppTypographySubHeading,
} from '../../atoms/typography';
import {styles} from './default';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import {AppRaisedButton} from '@components/atoms/buttons';
import {AppOptionsModal} from './options-modal';

type TSelect = {
  options: {label: string; id: string}[];
  selected?: string;
  label: string;
  right?: React.ReactNode;
  selectLabel?: string;
  onSelect?: (item: string) => void;
};

export const AppSelectInputAsButton: React.FC<TSelect> = props => {
  const modalizeRef = useRef<Modalize>(null);
  const animated = useRef(new Animated.Value(0)).current;

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  React.useEffect(() => {});

  let selectValue = '';

  if (props.selected != undefined) {
    let item = props.options.find(item => item.id == props.selected);
    selectValue = item?.label ?? '';
  }
  return (
    <View style={{}}>
      <Ripple
        onPress={() => {
          modalizeRef.current?.open();
        }}>
        <View
          style={{
            ...styles.inputContainer,
            backgroundColor: '#EEF0F0',
            elevation: 1,
          }}>
          <AppTypographyBody1 style={{flex: 1, padding: 12}}>
            {props.label.toUpperCase() ?? selectValue}
          </AppTypographyBody1>
          <View>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              onPress={() => modalizeRef.current?.open()}
            />
          </View>
        </View>
      </Ripple>

      <AppOptionsModal
        innerRef={modalizeRef}
        onSelect={props.onSelect}
        selectLabel={props.selectLabel ?? 'Select'}
        options={props.options}
        selected={props.selected}
      />
    </View>
  );
};

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
