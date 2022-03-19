import {Asset} from 'react-native-image-picker';

export interface TResource {
  id: string;
  publisher_id: string;
  publisher_fid: string;
  space_id: string;
  created_at:number;
  updated_at: number;
  body: string;
  images: string[];
}

interface Media {
  status: string;
  file_type: string;
  source: string;
  source_id: string;
  content_url: string;
  name: string;
}
