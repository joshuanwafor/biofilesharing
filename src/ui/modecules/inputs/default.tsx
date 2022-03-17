import React from 'react';
import {StyleSheet, Text, TextInputProps, View, TextInput} from 'react-native';
import Template from '../../templates/standardPageLight';
import {getAppColors} from '../../../style/theme';
import {VSpacer} from '../../../ui/atoms/shacer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppTypographyBody1} from '../../atoms/typography';

export const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    flex: 1,
    color: getAppColors.charcoalGrey,
  },
  inputContainer: {
    borderRadius: 4,
    backgroundColor: '#EEF0F1',
    marginTop: 6,
    marginBottom: 6,
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  textLabel: {
    color: 'rgba(100, 100, 100, 0.8)',
    marginBottom: 8,
    fontWeight: 500,
    fontSize: 14,
  },
});

export const AppInputDefault: React.FC<
  {label: string; right?: React.ReactNode} & TextInputProps
> = props => {
  return (
    <View style={{}}>
      <AppTypographyBody1 style={{marginBottom: 0, fontWeight: '500'}}>
        {props.label.toUpperCase()}
      </AppTypographyBody1>
      <View style={styles.inputContainer}>
        <TextInput {...props} style={styles.input} />
        <View>{props.right != undefined ? props.right : <View />}</View>
      </View>
    </View>
  );
};
