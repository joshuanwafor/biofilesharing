
import {AppCredential} from './credentials';
import {ENV_KEYS} from './utils';

export let AppConfig: {
  isJsonMime: () => boolean;
  basePath?: string;
  apiKey?: string;
} = {
  isJsonMime: () => true,
};


export function setUserAuthToken(token: string) {
  //new AppCredential().setAuth({id: 'user-id', token: 'token'});

  AppConfig.apiKey = token;

}
