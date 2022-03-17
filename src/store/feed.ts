import {makeAutoObservable, observable, runInAction} from 'mobx';
import {Alert} from 'react-native';
import {Resource} from '../api/api';
import {CUSTOM_API} from '../configure/global_variables';
import {getFeed} from '../services/content';

export class FeedManager {
  items: Resource[];

  constructor() {
    this.items = [];
    makeAutoObservable(this, {
      items: observable,
    });
    this.init();
  }

  init = async () => {
    try {
      var res = await getFeed();
      runInAction(() => {
        //@ts-ignore
        this.items = res?.data ?? [];
        //@ts-ignore
        Alert.alert('Loaded load', res?.data.toString());
      });
    } catch (e) {
      console.log('-- log out, failed to process');
    }
  };
}

export const feedsManager = new FeedManager();
