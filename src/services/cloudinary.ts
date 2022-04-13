
import Snackbar from 'react-native-snackbar';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { FilePickerFile } from 'react-native-file-picker';

const CLOUDINARY_ACCOUNT = 'dnzp55qsi';
const API_KEY = '196912755914714';
const UPLOAD_IMAGE_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_ACCOUNT}/auto/upload`;

type PRESET_TYPES =
  | 'image-medium'
  | 'vspace-thumbnail'
  | 'vspace-room-image'
  | 'vspace-box-image';

export async function UploadToCloudinary(
  file: FilePickerFile,
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
          data: 'ym5s3jfm',
        },
      ],
    );

    return JSON.parse(res.data).url;
  } catch (err) {
    console.log('failed to upload photo');
    throw err;
  }
}
