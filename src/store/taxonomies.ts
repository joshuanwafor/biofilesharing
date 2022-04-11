import {makeAutoObservable, observable, runInAction} from 'mobx';
import {TTaxonomy} from '../interface/models';
import {getTaxonomies} from '../services/taxonomies';

class Manager {
  taxonomies: TTaxonomy[];

  constructor() {
    this.taxonomies = [];
    makeAutoObservable(this, {
      taxonomies: observable,
    });
  }

  load = () => {
    getTaxonomies().then(res => {
      runInAction(() => {
        this.taxonomies = res;
      });
    });
  };
}

export const taxonomiesManager = new Manager();
