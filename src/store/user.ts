import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import {UserApi, User} from '../api/api';
import firebase from '@react-native-firebase/app';
import {createContext, useContext} from 'react';

import {
  AppConfig,
  CUSTOM_API,
  setUserAuthToken,
} from '../configure/global_variables';
import {ENV_KEYS} from '../configure/utils';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AppCredential} from '../configure/credentials';
import {getAuth, getProfile} from '../services/user';
import { setHeaderToken } from '../configure/request';

class UserManager {
  user?: User;
  fbUser: FirebaseAuthTypes.User | null = null;
  userAuthToken: string | null = null;
  canSignin: boolean = true;

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      fbUser: observable,
      userAuthToken: observable,
    });
    this.init();
  }

  init() {
    this.checkAuthToken();
  }

  checkAuthToken() {
    new AppCredential().getAuth().then(v => {
      console.log(v, 'my token');
      if (v.token != undefined) {
        setHeaderToken(v.token);
        this.loadUserProfile();
        runInAction(() => {
          this.userAuthToken = v.token;
          this.canSignin = false;
        });
      }
    });
  }

  loadUserProfile = async () => {
    console.log('loading profile...');
    try {
      let user = await getProfile();
      console.log(user, ' goes here');
      runInAction(() => {
        this.user = user;
      });
    } catch (e) {
      console.log('---error occured in loading user');
      console.log(e);
    }
  };

  checkSignedInUser = async () => {
    let user = firebase.auth().currentUser;

    try {
      if (user == null) {
        runInAction(() => {
          this.canSignin = true;
        });
        return;
      }
      console.log('firebased login passed');
      // get id token to retrieve new token from backend
      await getAuth();
      await this.loadUserProfile();
    } catch (e: any) {
      console.log('error loading user auth');
      console.log(e);
    }
  };

  updateProp = (prop: string, value: any) => {
    runInAction(() => {
      // @ts-ignore
      this.user[prop] = value;
    });
  };
  updateAddressProp = (prop: string, value: any) => {
    runInAction(() => {
      // @ts-ignore
      let tempU: User = {address: {...this.user?.address}};
      // @ts-ignore
      tempU.address[prop] = value;
      this.user = {...tempU};
    });
  };

  updateUser = async () => {
    let updateOb = {
      bio: this.user?.bio,
      phone: this.user?.phone,
      ...this.user,
    };
    CUSTOM_API.userAPI?.updateUserProfile(updateOb).then(res => {
      console.log(res);
    });
  };

  siginUpWithGoogle = async (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(v => {
        this.checkSignedInUser();
      })
      .catch(v => {});
  };

  siginInWithGoogle = async (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(v => {
        this.checkSignedInUser();
      })
      .catch(v => {
        throw v;
      });
  };
}

export const userManager = new UserManager();

export const UserContext = createContext<UserManager>(userManager);

export const useUserStore = (): UserManager => {
  return useContext<UserManager>(UserContext);
};

async function fetchAuthUser(token: string) {
  try {
    let res = await fetch(AppConfig.basePath + '/user/auth', {
      method: 'post',
      body: JSON.stringify({token: token}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    return await res.json();
  } catch (e) {
    throw e;
  }
}
