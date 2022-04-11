import {forHorizontalIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import {makeAutoObservable, observable, runInAction} from 'mobx';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {Resource} from '../api/api';
import {CUSTOM_API} from '../configure/global_variables';
import {TSpace} from '../interface/models';
import {
  deleteSpace,
  getMySpaces,
  getPublicSpaces,
  publishSpace,
  updateSpace,
} from '../services/space';

export class FeedManager {
  spaces: TSpace[];

  constructor() {
    this.spaces = [];
    makeAutoObservable(this, {
      spaces: observable,
    });
  }

  loadMySpaces = async () => {
    console.log('loading public spaces');
    let spaces = await getPublicSpaces();

    runInAction(() => {
      this.spaces = spaces;
    });
  };
}

export const feedManager = new FeedManager();
