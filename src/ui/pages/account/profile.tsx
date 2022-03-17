import React from 'react';
import {TextInputProps, View} from 'react-native';
import Template from '../../templates/standardPage';
import {VSpacer} from '../../../ui/atoms/shacer';
import {AppInputDefault} from '../../modecules/inputs/default';
import {AppRaisedButton} from '../../atoms/buttons';

const Screen: React.FC = () => {
  const divider = (
    <View style={{height: 1, backgroundColor: 'rgba(200,200,200,.5)'}} />
  );

  return (
    <Template
      title="Update profile"
      show_back
      bottom={<AppRaisedButton label="Update"></AppRaisedButton>}>
      <View style={{padding: 24}}>
        <AppInputDefault label="First name" />
        <VSpacer />
        <AppInputDefault label="Last name" secureTextEntry={true} />
        <VSpacer />
        <AppInputDefault label="Email" />
        <VSpacer />
        <AppInputDefault label="Phone" />
        <VSpacer />
        <AppInputDefault label="Bio" />
      </View>
    </Template>
  );
};
export default Screen;
