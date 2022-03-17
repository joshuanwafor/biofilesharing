import {
  UserApi,
  DefaultApi,
  TaxonomyApi,
  Resource,
  Course,
  CourseApi,
  ResourceApi,
  ProductApi,
} from '../api/api';
import {AppCredential} from './credentials';
import {ENV_KEYS} from './utils';

export let AppConfig: {
  isJsonMime: () => boolean;
  basePath?: string;
  apiKey?: string;
} = {
  isJsonMime: () => true,
};

export let CUSTOM_API: {
  defaultAPI?: DefaultApi;
  userAPI?: UserApi;
  taxonomyAPI?: TaxonomyApi;
  courseAPI?: CourseApi;
  resourceAPI?: ResourceApi;
  productAPI?: ProductApi;
} = {};

CUSTOM_API.resourceAPI = new ResourceApi(AppConfig);

export function setUserAuthToken(token: string) {
  //new AppCredential().setAuth({id: 'user-id', token: 'token'});

  AppConfig.apiKey = token;
  CUSTOM_API.defaultAPI = new DefaultApi(AppConfig);
  CUSTOM_API.userAPI = new UserApi(AppConfig);
  CUSTOM_API.taxonomyAPI = new TaxonomyApi(AppConfig);
  
  CUSTOM_API.courseAPI = new CourseApi(AppConfig);
  CUSTOM_API.productAPI = new ProductApi(AppConfig);
}
