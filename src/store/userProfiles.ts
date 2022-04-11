import {makeAutoObservable, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {TSpace, TUser} from '../interface/models';
import {getSpaceByCode, getSpaceByID} from '../services/space';
import {getProfileByID} from '../services/user';

class InfoStore {
  items: {[key: string]: TUser} = {};

  constructor() {
    makeAutoObservable(this, {
      items: observable,
    });
  }

  loadContent = async (item_id: string) => {
    if (this.items[item_id] != undefined) {
      console.log('user details already loaded');
      return;
    }
    let info = await getProfileByID(item_id);
    runInAction(() => {
      if (info != undefined) {
        this.items[item_id] = info;
      }
    });
  };
}

export const usersProfileManager = new InfoStore();
