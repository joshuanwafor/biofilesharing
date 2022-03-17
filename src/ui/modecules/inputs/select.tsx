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
import {AppOptionsModal} from './options-modal';

type TSelect = {
  options: {label: string; id: string}[];
  selected?: string;
  label: string;
  right?: React.ReactNode;
  selectLabel?: string;
  onSelect?: (item: string) => void;
};

export const AppSelectInput: React.FC<TSelect> = props => {
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
      <AppTypographyBody1 style={{marginBottom: 0, fontWeight: '500'}}>
        {props.label.toUpperCase()}
      </AppTypographyBody1>
      <Ripple
        onPress={() => {
          modalizeRef.current?.open();
        }}>
        <View style={styles.inputContainer}>
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={styles.input}
            value={selectValue}
          />
          <View>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              onPress={() => modalizeRef.current?.open()}
            />
          </View>
        </View>
      </Ripple>

      <React.Fragment>
        <AppOptionsModal
          innerRef={modalizeRef}
          onSelect={props.onSelect}
          selectLabel={props.selectLabel ?? 'Select'}
          options={props.options}
          selected={props.selected}
        />
      </React.Fragment>
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
