import {Asset} from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import ReactNativeBlobUtil from 'react-native-blob-util';

const CLOUDINARY_ACCOUNT = '10xjoshua';
const API_KEY = '353477697489967';
const UPLOAD_IMAGE_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_ACCOUNT}/image/upload`;

type PRESET_TYPES =
  | 'image-medium'
  | 'vspace-thumbnail'
  | 'vspace-room-image'
  | 'vspace-box-image';

async function UploadToCloudinary(
  file: Asset,
  type?: PRESET_TYPES,
): Promise<string | undefined> {
  console.log('Uploading image');
  let timeStamp = Date.now();
  try {
    let res = await ReactNativeBlobUtil.fetch(
      'POST',
      UPLOAD_IMAGE_URL,
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'file',
          filename: file.fileName,
          type: file.type,
          data: ReactNativeBlobUtil.wrap(file.uri ?? ''),
        },
        {
          name: 'api_key',
          data: API_KEY,
        },
        {
          name: 'timestamp',
          data: `${timeStamp}`,
        },
        {
          name: 'public_id',
          data: `file-${timeStamp}`,
        },
        {
          name: 'upload_preset',
          data: type ?? 'vspace-box-image',
        },
      ],
    );

    return JSON.parse(res.data).url;
  } catch (err) {
    console.log('failed to upload photo');
    throw err;
  }
}

export async function uploadRoomImage(file: Asset) {
  return await UploadToCloudinary(file, 'vspace-room-image');
}

export async function CloudinaryuploadRoomImages(files: Asset[]): Promise<string[]> {
  try {
    let urls: any = await Promise.all(
      files.map(file => {
        return uploadRoomImage(file);
      }),
    );
    console.log(urls);
    return urls;
  } catch (error) {
    console.log(error);
    Snackbar.show({
      text: 'Failed assets upload',
      duration: Snackbar.LENGTH_SHORT,
    });
    throw error;
  }
}
