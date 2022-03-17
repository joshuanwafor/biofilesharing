import {AppTypographyBody1} from '../../atoms/typography';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HSpacer} from '../../atoms/shacer';

const style = StyleSheet.create({
  headerBTN: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(100,190,100,.1)',
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
});

export function JobInfoBar() {
  const ActionButton = (
    <View
      style={{
        ...style.headerBTN,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}>
      <AppTypographyBody1 style={{fontWeight: '500', color: 'black'}}>
        Active
      </AppTypographyBody1>
      <HSpacer space={6} />
      <Ionicons name="chevron-down-outline" size={20} />
    </View>
  );
  const SeondaryButton = (
    <View
      style={{
        ...style.headerBTN,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}>
      <AppTypographyBody1 style={{fontWeight: '500', color: 'black'}}>
        🇳🇬 Jos North
      </AppTypographyBody1>
      <HSpacer space={6} />
      <Ionicons name="earth-outline" size={20} color={'green'} />
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: 'white',
        // padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
      }}>
      {SeondaryButton}
      {ActionButton}
    </View>
  );
}
