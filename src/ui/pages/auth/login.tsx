import Template from '../../templates/authTemplate';
import React from 'react';
import {AppInputDefault} from '../../modecules/inputs/default';
import {AppRaisedButton} from '../../../ui/atoms/buttons';
import {View} from 'react-native';
import {VSpacer, HSpacer} from '../../../ui/atoms/shacer';
import {AppFlexBoxRow} from '../../../ui/atoms/utilities';
import {AppTypographyCaption} from '../../../ui/atoms/typography';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEmailPasswordAuth, useGoogleSignin} from '../../../hooks/auth';

const Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<{register: undefined}>>();

  const {siginInWithGoogle} = useGoogleSignin();
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');

  const {login} = useEmailPasswordAuth();

  return (
    <Template
      title="Signin"
      right_icons={
        <View style={{height: 42}}>
          <AppRaisedButton
            label="Register"
            is_raised={false}
            onClick={() => {
              navigation.navigate('register');
            }}
          />
        </View>
      }>
      <View style={{padding: 24}}>
        <AppInputDefault
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <VSpacer />
        
        <AppInputDefault
          label="password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
         <VSpacer />
        <AppRaisedButton
          label="Sigin"
          colorScheme="primary"
          onClick={() => login(email, password)}
        />
          <VSpacer />
  
        <AppFlexBoxRow style={{alignItems: 'center'}}>
          <View
            style={{
              height: 1,
              backgroundColor: 'rgba(200,200,200,.5)',
              flex: 1,
            }}
          />
          <HSpacer />
          <AppTypographyCaption>OR</AppTypographyCaption>
          <HSpacer />
          <View
            style={{
              height: 1,
              backgroundColor: 'rgba(200,200,200,.5)',
              flex: 1,
            }}
          />
        </AppFlexBoxRow>
        <VSpacer />
        <AppRaisedButton
          label="Signin with Google"
          colorScheme="google"
          onClick={siginInWithGoogle}
        /> 
      </View>
    </Template>
  );
};

export default Screen;
