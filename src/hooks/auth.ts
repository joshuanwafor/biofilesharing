import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ToastAndroid} from 'react-native';
import {userManager} from '../store/user';

export function useGoogleSignin() {
  GoogleSignin.configure({
    webClientId:
      '1071700599888-u3frv0v263c7rbm2cvhhsrphep12cc79.apps.googleusercontent.com',
  });

  async function siginIn() {
    try {
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      let userC = await auth().signInWithCredential(googleCredential);

      if (userC.user != null) {
        firestore()
          .collection('users')
          .doc(userC.user.email ?? '')
          .set(
            {
              ...user,
            },
            {merge: true},
          );
      }
    } catch (e) {
      console.log(e);
    }
  }

  return {
    siginInWithGoogle: siginIn,
  };
}

export function useEmailPasswordAuth() {
  async function signup(email: string, password: string) {
    if (email == null || password == null) {
      return;
    }
    console.log('trying to siginup');
    try {
      let userC = await auth().createUserWithEmailAndPassword(email, password);
      if (userC.user != null) {
        firestore()
          .collection('users')
          .doc(userC.user.email ?? '')
          .set({}, {merge: true});
        console.log('checking signin');
        userManager.checkSignedInUser();
      }
      ToastAndroid.show('Create account', ToastAndroid.CENTER);
    } catch (e: any) {
      ToastAndroid.show(e.message, ToastAndroid.CENTER);
      console.log(e);
    }
  }

  async function signin(email: string, password: string) {
    if (email == null || password == null) {
      return;
    }
    try {
      console.log('trying to siginin');
      let userC = await auth().signInWithEmailAndPassword(email, password);
      if (userC.user != null) {
        firestore()
          .collection('users')
          .doc(userC.user.email ?? '')
          .set({}, {merge: true});

        console.log('checking signin');
        userManager.checkSignedInUser();
      }
    } catch (e: any) {
      ToastAndroid.show(e.message, ToastAndroid.CENTER);
      console.log(e);
    }
  }

  return {
    createAccount: signup,
    login: signin,
  };
}
