import styled from 'styled-components/native';
import React from 'react';
import TouchableRipple from 'react-native-material-ripple';
import {getAppColors} from '../../style/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Ripple = styled<{background?: string; is_raised?: boolean}>(
  TouchableRipple,
)`
  z-index: -1;
  border-radius: 40px;
  flex-direction: row;
  height: 42px;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: center;
  background-color: ${({background}) => background ?? 'white'};
`;

const ButtonText = styled.Text<{color?: string}>`
  font-size: 16px;
  color: ${({color}) => color ?? 'black'};
`;

export const AppRaisedButton: React.FC<{
  label: React.ReactNode;
  onClick?: () => void;
  is_raised?: boolean;
  colorScheme?: 'primary' | 'secondary' | 'default' | 'google';
}> = ({label, onClick, is_raised, colorScheme = 'secondary'}) => {
  let color = getAppColors.charcoalGrey;
  let background = getAppColors.white;

  switch (colorScheme) {
    case 'primary':
      color = getAppColors.white;
      background = getAppColors.pink;
      break;
    case 'secondary':
      color = getAppColors.white;
      background = getAppColors.charcoalGrey;
      break;
    case 'google':
      color = getAppColors.white;
      background = getAppColors.googleBlue;
      break;
  }

  return (
    <Ripple
      onPress={onClick}
      rippleContainerBorderRadius={6}
      is_raised={is_raised ?? true}
      background={background}>
      <ButtonText color={color}>{label}</ButtonText>
    </Ripple>
  );
};

export const AppPlainButton: React.FC<{label: string}> = ({label}) => {
  return (
    <Ripple
      onPress={() => {}}
      accessibilityRole="button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}>
      <ButtonContainer>
        <ButtonText>{label}</ButtonText>
      </ButtonContainer>
    </Ripple>
  );
};

export const AppIconButton = ({
  color,
  name,
  onPress,
}: {
  color: string;
  name: string;
  onPress: () => void;
}) => {
  return (
    <Ionicons
      name={name}
      size={24}
      color={color}
      onPress={() => {
        onPress();
      }}
      style={{
        padding: 8,
        backgroundColor: 'rgba(200,200,200,.2)',
        borderRadius: 50,
      }}
    />
  );
};
