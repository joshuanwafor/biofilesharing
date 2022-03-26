import Template from '../../templates/standardPage';
import React from 'react';
import {AppInputDefault} from '../../modecules/inputs/default';
import {
  AppTypographyBody1,
  AppTypographyHeading,
} from '../../../ui/atoms/typography';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useEmailPasswordAuth, useGoogleSignin} from '../../../hooks/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, HStack, VStack, Button} from 'native-base';

const Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<{login: undefined}>>();

  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');

  const {siginInWithGoogle} = useGoogleSignin();
  const {createAccount} = useEmailPasswordAuth();

  return (
    <Template
      title="Register"
      show_back
      right_icons={
        <Ionicons
          name="ellipsis-vertical-outline"
          size={24}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            padding: 8,
            backgroundColor: 'rgba(200,200,200,.2)',
            borderRadius: 50,
          }}
        />
      }>
      <VStack flex={1}>
        <VStack
          style={{padding: 24}}
          space="4"
          flex={1}
          justifyContent="center">
          <Box>
            <AppTypographyHeading style={{fontWeight: 'bold', fontSize: 42}}>
              Create New Account
            </AppTypographyHeading>
            <AppTypographyBody1>Setup account in a giff..</AppTypographyBody1>
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
            onPress={() => createAccount(email, password)}
            p="16px"
            colorScheme="rose"
            bg="rose.600">
            Create Account
          </Button>
        </VStack>
        <Box p="24px">
          <HStack justifyContent={'center'} space="1" alignItems={'center'}>
            <AppTypographyBody1 style={{textAlign: 'center'}}>
              Already have an account?
            </AppTypographyBody1>
            <Button
              p="0px"
              variant={'link'}
              color="rose.500"
              onPress={() => {
                // @ts-ignore
                navigation.navigate('login');
              }}
              colorScheme="rose">
              Signin
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Template>
  );
};

export default Screen;
