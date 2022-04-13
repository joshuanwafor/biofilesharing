import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Template from '../../templates/standardPage';
import { AppInputDefault } from '../../modecules/inputs/default';
import {
  Box,
  Button,
  HStack,
  ScrollView,
  VStack
  } from 'native-base';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEmailPasswordAuth, useGoogleSignin } from '../../../hooks/auth';
import {
  AppTypographyBody1,
  AppTypographyHeading,
} from '../../../ui/atoms/typography';

const Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<{login: undefined}>>();

  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');

  const {siginInWithGoogle} = useGoogleSignin();
  const {createAccount} = useEmailPasswordAuth();

  return (
    <Template
      title=""
      show_back>
      <ScrollView>
        <VStack flex={1} mt={24}>
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
              bg="blue.500">
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
                color="blue.500"
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
      </ScrollView>
    </Template>
  );
};

export default Screen;
