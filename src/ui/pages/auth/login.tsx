import Template from '../../templates/authTemplate';
import React from 'react';
import {AppInputDefault} from '../../modecules/inputs/default';
import {AppRaisedButton} from '../../../ui/atoms/buttons';
import {View} from 'react-native';
import {VSpacer, HSpacer} from '../../../ui/atoms/shacer';
import {AppFlexBoxRow} from '../../../ui/atoms/utilities';
import {
  AppTypographyBody1,
  AppTypographyCaption,
  AppTypographyHeading,
} from '../../../ui/atoms/typography';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEmailPasswordAuth, useGoogleSignin} from '../../../hooks/auth';
import {Box, Button, HStack, VStack} from 'native-base';
import {MainAppNavigationRoutes} from '../../../interface/navigation';

const Screen: React.FC = () => {
  const navigation = useNavigation();

  const {siginInWithGoogle} = useGoogleSignin();
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');

  const {login} = useEmailPasswordAuth();

  return (
    <Template title="Signin">
      <VStack flex={1}>
        <VStack
          style={{padding: 24}}
          space="4"
          flex={1}
          justifyContent="center">
          <Box>
            <AppTypographyHeading style={{fontWeight: 'bold', fontSize: 42}}>
              Login
            </AppTypographyHeading>
            <AppTypographyBody1>Please signin to continue.</AppTypographyBody1>
          </Box>
          <AppInputDefault
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <AppInputDefault
            label="password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          <Button
            onPress={() => login(email, password)}
            p="16px"
            colorScheme="rose"
            bg="rose.600">
            Login
          </Button>
        </VStack>
        <Box p="24px">
          <HStack justifyContent={'center'} space="1" alignItems={'center'}>
            <AppTypographyBody1 style={{textAlign: 'center'}}>
              Don't have an account?
            </AppTypographyBody1>
            <Button
              p="0px"
              variant={'link'}
              color="rose.500"
              onPress={() => {
                // @ts-ignore
                navigation.navigate('register');
              }}
              colorScheme="rose">
              Signup
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Template>
  );
};

export default Screen;
