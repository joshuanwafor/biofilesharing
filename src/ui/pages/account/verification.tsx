import React from 'react';
import {TextInputProps, View} from 'react-native';
import Template from '../../templates/standardPage';
import styled from 'styled-components/native';
import {getAppColors} from '../../../style/theme';
import {VSpacer} from '../../../ui/atoms/shacer';
import {AppInputDefault} from '../../modecules/inputs/default';

const Screen: React.FC = () => {
  return (
    <Template title="Account verification">
      <View style={{padding: 24}}>
        <AppInputDefault label="First name" />
        <VSpacer />
        <AppInputDefault label="Last name" secureTextEntry={true} />
        <VSpacer />
        <AppInputDefault label="Middle name" />
      </View>
    </Template>
  );
};
export default Screen;
