import {forHorizontalIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import {makeAutoObservable, observable, runInAction} from 'mobx';
import {TFile, TSpace} from '../interface/models';
import {firebase} from '@react-native-firebase/firestore';
import RNBlob from 'react-native-blob-util';
import {FilePickerFile, FilePickerResult} from 'react-native-file-picker';
import {uploadFile} from '../services/storage';
import {UploadToCloudinary} from '../services/cloudinary';

const collection = firebase.firestore().collection('files');
export class FileManager {
  files: TFile[];
  filesSharedWithMe: TFile[];

  constructor() {
    this.files = [];
    this.filesSharedWithMe = [];
    makeAutoObservable(this, {
      files: observable,
      filesSharedWithMe: observable,
    });
  }

  load() {
    collection
      .where('publisher_id', '==', firebase.auth().currentUser?.email)
      .get()
      .then(resp => {
        let list = resp.docs.map(doc => doc.data());
        runInAction(() => {
          this.files = list;
        });
      });
  }

  loadSharedWithMe() {
    collection
      .where(
        'shared_with',
        'array-contains',
        firebase.auth().currentUser?.email,
      )
      .get()
      .then(resp => {
        let list = resp.docs.map(doc => doc.data());
        runInAction(() => {
          this.filesSharedWithMe = list;
        });
      });
  }

  async share(file: FilePickerResult, receiver: string) {
    try {
      const fileURL = await UploadToCloudinary(file);
      console.log(fileURL, 'uploaded');
      console.log(file.fileName);
      let userID = firebase.auth().currentUser?.uid;
      let id = userID + '-' + Date.now();

      await collection.doc(id).set({
        publisher_id: firebase.auth().currentUser?.email,
        id: id,
        type: file.type,
        ext: file.fileName.split('.')[1],
        name: file.fileName,
        //@ts-ignore
        size: file.size,
        shared_with: [receiver],
        created: Date.now(),
        url: fileURL,
      });

      this.load();
    } catch (error) {
      console.log(error);
    }
  }

  updateFileShareWith(file: TFile, users: string[]) {}
}

export const fileManager = new FileManager();
