import request from '../configure/request';
import {TSpace, TTaxonomy} from '../interface/models';
import {parseRequestResponse} from '../utils';

export const getTaxonomies = async (): Promise<TTaxonomy[]> => {
  try {
    let res = await request.get('/taxonomies');
    return parseRequestResponse<TTaxonomy[]>(res);
  } catch (err) {
    console.log(err, 'could not load taxonomies');
    throw err;
  }
};
