import storage from '@react-native-firebase/storage';
import {FilePickerFile} from 'react-native-file-picker';
import Snackbar from 'react-native-snackbar';

export async function uploadFile(file: FilePickerFile): Promise<string> {
  console.log("about to upload")
  let filePath = '/files/' + file.fileName + '-' + Date.now();
  const reference = storage().ref(filePath);

  try {
    await reference.putFile(file.uri ?? '');
    const url = await storage().ref(filePath).getDownloadURL();
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    console.log("error uploading")
    throw error;
  }
}