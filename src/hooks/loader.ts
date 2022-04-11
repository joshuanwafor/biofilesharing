import React from 'react';
import {feedManager} from '../store/feed';
import {spacesManager} from '../store/spaces';
import {taxonomiesManager} from '../store/taxonomies';
import {userManager} from '../store/user';

export function useAppLoader() {
  React.useEffect(() => {
    userManager.checkSignedInUser().then(res => {
      console.log('checked signin user');
      taxonomiesManager.load();
      feedManager.loadMySpaces();
      spacesManager.loadMySpaces();
    });
  }, []);
}
