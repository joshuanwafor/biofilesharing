
export interface TResource {
  id: string;
  publisher_id: string;
  publisher_fid: string;
  space_id: string;
  created_at: number;
  updated_at: number;
  body: string;
  type: string;
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

export interface TTaxonomy {
  name: string;
  description: string;
  id: string;
  type: string;
}

export interface TSpace {
  id?: string;
  createdAt?: any;
  updatedAt?: any;
  publisher_id?: string;
  code?: string;
  title: string;
  body: string;
  status: string;
  categories?: string[];
  photo?: string;
  price?: number;
}

export interface TSubscription {
  id?: string;
  createdAt?: any;
  fuid?: string;
  space_id: string;
}

export interface TUser {
  id: string;
  fullname: string;
  bio: string;
  verified: boolean;
  fuid: string;
  email: string;
  phone: string;
  photo: string;
}

export interface TFile {
  id?: string;
  publisher_id?: string;
  type?: string;
  ext?: string;
  name?: string;
  size?: string;
  created?: string;
  modified?: string;
  shared_with?: string[];
}
