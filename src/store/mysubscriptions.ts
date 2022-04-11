import firestore, {
  firebase,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {makeAutoObservable, observable, runInAction} from 'mobx';
import {Asset} from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import {TResource, TSpace, TSubscription} from '../interface/models';
import {CloudinaryuploadRoomImages} from '../services/cloudinary';
import {userManager} from './user';

class Manager {
  subscriptions: TSubscription[];

  constructor() {
    this.subscriptions = [];
    makeAutoObservable(this, {
      subscriptions: observable,
    });
  }

  getCollection() {
    const _ = firestore().collection(
      'users/' + firebase.auth().currentUser?.uid + '/subscriptions',
    );
    return _;
  }

  async subscribe(space: TSpace) {
    let timestamp = Date.now();
    let data: TSubscription = {
      space_id: space.id ?? '',
      fuid: firebase.auth().currentUser?.uid,
      id: space.id ?? '',
      createdAt: timestamp,
    };
    try {
      await this.getCollection()
        .doc(space.id + '')
        .set(data);

      Snackbar.show({text: 'Successfully Subscribed to space'});
      let newResource = await this.getCollection()
        .doc('res' + timestamp)
        .get();
      if (newResource.data != undefined) {
        this.loadSubscriptions();
      }
    } catch (error) {
      Snackbar.show({text: 'Failed to publish resource'});
      throw error;
    }
  }

  async delete(id: string, space: string) {
    if (this.subscriptions.length == undefined) return;
    try {
      let response = await this.getCollection().doc(id).delete();
      // remove it from list

      let nlist = this.subscriptions.filter(v => v.id !== id);
      runInAction(() => {
        this.subscriptions = [...nlist];
      });
    } catch (error) {
      throw error;
    }
  }

  async updateResource(document: any, id: string, space: string = 'global') {
    try {
      let response = await this.getCollection().doc(id).set(document);
      // add to list
    } catch (error) {
      throw error;
    }
  }

  async loadSubscriptions() {
    try {
      let rawItems = (await this.getCollection().get()).docs;
      let items = rawItems.map<TSubscription>(item => {
        let data: TSubscription = item.data() as any;
        return data;
      });

      runInAction(() => {
        this.subscriptions = [...items];
      });
      
    } catch (error) {
      throw error;
    }
  }
}

export const subscriptionsManager = new Manager();
