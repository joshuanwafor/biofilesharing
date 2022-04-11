import {makeAutoObservable, observable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import {TSpace} from '../interface/models';
import {getSpaceByCode, getSpaceByID} from '../services/space';

class ContentInfoStore {
  items: {[key: string]: TSpace} = {};

  constructor() {
    makeAutoObservable(this, {
      items: observable,
    });
  }

  loadContent = async (item_id: string) => {
    let info = await getSpaceByID(item_id);
    runInAction(() => {
      if (info != undefined) {
        this.items[item_id] = info;
      }
    });
  };
}

export const spaceInfoManager = new ContentInfoStore();
