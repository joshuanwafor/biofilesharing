import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {makeAutoObservable, observable, runInAction} from 'mobx';
import {TResource} from '../interface/models';



class SpaceRoomManager {
  items: TResource[];

  constructor() {
    this.items = [];
    makeAutoObservable(this, {
      items: observable,
    });
  }

  getSpaceCollection() {
    const room = firestore().collection('spaces/space/room');
    return room;
  }

  async publishResource(data: TResource) {
    data.created_at = Date.now();
    try {
      let response = await this.getSpaceCollection().add(data);
      let newResource = await response.get();
      if (newResource.data != undefined) {
        // @ts-ignore
        let item: TResource = newResource.data;
        runInAction(() => {
          this.items = [...(this.items || []), item];
        });
      }
      // add to list
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      let response = await this.getSpaceCollection().doc(id).delete();
      // remove it from list
      let nlist = this.items.filter(v => v.id !== id);
      runInAction(() => {
        this.items = nlist;
      });
    } catch (error) {
      throw error;
    }
  }

  async updateResource(document: any, id: string) {
    try {
      let response = await this.getSpaceCollection().doc(id).set(document);
      // add to list
    } catch (error) {
      throw error;
    }
  }

  async loadResource() {
    try {
      let rawItems = (await this.getSpaceCollection().get()).docs;
      let items = rawItems.map<TResource>((item: any) => {
        let data: TResource = item.data;
        return data;
      });
      runInAction(() => {
        this.items = items;
      });
    } catch (error) {
      throw error;
    }
  }
}

export const spaceRoomManager = new SpaceRoomManager();
