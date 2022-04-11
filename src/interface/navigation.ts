import {TResource, TSpace} from './models';

export type MainAppNavigationRoutes = {
  home: undefined;
  spaceDetails: {space: TSpace};
  spaceDetailsByCode: {code: string};
  spaceRoom: {space: TSpace};
  newResource: {space: TSpace};
  editResource: {resource: TResource};
  viewResource: {res: TResource};
  feed: undefined;
  newSpace: undefined;
  editSpace: {
    space?: TSpace;
  };
  settings: undefined;
  explore: undefined;
  exploreFilter: undefined;
  search: undefined;

  publicUserProfile: undefined;

  dashboard: undefined;
  account: undefined;
  address: undefined;
  bankAccount: undefined;
  notifications: undefined;
  verification: undefined;
};
