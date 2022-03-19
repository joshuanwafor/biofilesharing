import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {makeAutoObservable, observable, runInAction} from 'mobx';
import {Asset} from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import {TResource} from '../interface/models';
import {CloudinaryuploadRoomImages} from '../services/cloudinary';

class SpaceRoomManager {
  roomMap: {[key: string]: TResource[]};

  constructor() {
    this.roomMap = {};
    makeAutoObservable(this, {
      roomMap: observable,
    });
  }

  getSpaceCollection(space: string) {
    const roomCollection = firestore().collection('spaces/' + space + '/room');
    return roomCollection;
  }

  async publishResource(body: string, assets: Asset[], space = 'global') {
    console.log('uploading stuff');
    let urls = await CloudinaryuploadRoomImages(assets);
    let timestamp = Date.now();
    let data: TResource = {
      body: body,
      images: urls ?? [],
      id: 'res-' + timestamp,
      publisher_fid: '',
      publisher_id: '',
      space_id: space,
      updated_at: timestamp,
      created_at: timestamp,
    };

    try {
      await this.getSpaceCollection(space)
        .doc(timestamp + '-res')
        .set(data);
      let newResource = await this.getSpaceCollection(space)
        .doc('res' + timestamp)
        .get();
      if (newResource.data != undefined) {
        // @ts-ignore
        // let item: TResource = newResource.data();
        // runInAction(() => {
        //   this.roomMap[space] = [...(this.roomMap[space] || []), item];
        // });
        this.loadSpaceRoomResources(space);

        Snackbar.show({text: 'Uploaded published resource'});
      }
      // add to list
    } catch (error) {
      Snackbar.show({text: 'Failed to publish resource'});
      throw error;
    }
  }

  async delete(id: string, space: string) {
    if (this.roomMap[space].length == undefined) return;
    try {
      let response = await this.getSpaceCollection(space).doc(id).delete();
      // remove it from list

      let nlist = this.roomMap[space].filter(v => v.id !== id);
      runInAction(() => {
        this.roomMap[space] = [...nlist];
      });
    } catch (error) {
      throw error;
    }
  }

  async updateResource(document: any, id: string, space: string = 'global') {
    try {
      let response = await this.getSpaceCollection(space).doc(id).set(document);
      // add to list
    } catch (error) {
      throw error;
    }
  }

  async loadSpaceRoomResources(space: string = 'global') {
    try {
      let rawItems = (await this.getSpaceCollection(space).get()).docs;
      let items = rawItems.map<TResource>((item) => {
        let data: TResource = item.data() as any;
        return data;
      });

      runInAction(() => {
        this.roomMap[space] = [...items];
      });
    } catch (error) {
      throw error;
    }
  }
}

export const spaceRoomManager = new SpaceRoomManager();
