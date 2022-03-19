import storage from '@react-native-firebase/storage';
import {Asset} from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';

const reference = storage().ref('black-t-shirt-sm.png');

export async function uploadImageFile(file: Asset): Promise<string> {
  let filePath = '/room/images/' + file.fileName + '-' + Date.now();
  const reference = storage().ref(filePath);

  try {
    await reference.putFile(file.uri ?? '');
    const url = await storage().ref(filePath).getDownloadURL();
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    throw error;
  }
}