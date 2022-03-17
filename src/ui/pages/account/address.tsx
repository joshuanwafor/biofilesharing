import React from 'react';
import {TextInputProps, View} from 'react-native';
import Template from '../../templates/standardPage';
import {VSpacer} from '../../atoms/shacer';
import {AppInputDefault} from '../../modecules/inputs/default';
import {AppRaisedButton} from '../../atoms/buttons';

const Screen: React.FC = () => {
  const divider = (
    <View style={{height: 1, backgroundColor: 'rgba(200,200,200,.5)'}} />
  );

  return (
    <Template
      title="Update Address"
      show_back
      bottom={<AppRaisedButton label="Update"></AppRaisedButton>}>
      <View style={{padding: 24}}>
        <AppInputDefault label="Country" />
        <VSpacer />
        <AppInputDefault label="State" />
        <VSpacer />
        <AppInputDefault label="City" />
        <VSpacer />
        <AppInputDefault label="Street" />
      </View>
    </Template>
  );
};
export default Screen;
