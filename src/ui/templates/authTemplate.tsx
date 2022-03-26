import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {getAppColors} from '../../style/theme';
const Screen: React.FC<{title: string; right_icons?: React.ReactNode}> = ({
  children,
  title,
  right_icons,
}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          elevation: 5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View style={{paddingHorizontal: 0, paddingVertical: 16}} flex={1}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default Screen;
