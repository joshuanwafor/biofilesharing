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
  publishSpace,
  updateSpace,
} from '../services/space';

export class SpacesManager {
  myspaces: TSpace[];

  constructor() {
    this.myspaces = [];
    makeAutoObservable(this, {
      myspaces: observable,
    });
  }

  loadMySpaces = async () => {
    console.log('loading spaces');
    let spaces = await getMySpaces();

    runInAction(() => {
      this.myspaces = spaces;
    });
  };

  createSpace = async (space: TSpace) => {
    try {
      let res = await publishSpace(space);
      console.log(res, ' after publish');
      if (res == undefined) return;
      runInAction(() => {
        this.myspaces = [...this.myspaces, res];
        Snackbar.show({text: 'Published space successfully'});
      });
    } catch (error) {}
  };

  updateSpace = async (space: TSpace) => {
    try {
      let res = await updateSpace(space);

      runInAction(() => {
        let index = this.myspaces.findIndex(v => v.id == space.id);
        this.myspaces[index] = {...space};
        console.log('tried update arrray item');
      });
      if (res == undefined) return;
      Snackbar.show({text: 'Updated space successfully'});
    } catch (error) {}
  };

  deleteSpace = (space: TSpace) => {
    deleteSpace(space);
  };
}

export const spacesManager = new SpacesManager();
