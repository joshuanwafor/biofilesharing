import request from '../configure/request';
import {TSpace} from '../interface/models';
import {parseRequestResponse} from '../utils';

export const getPublicSpaces = async (): Promise<TSpace[]> => {
  try {
    let res = await request.get('/public/spaces');
    return parseRequestResponse<TSpace[]>(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};

export const getMySpaces = async (): Promise<TSpace[]> => {
  try {
    let res = await request.get('/spaces');
    return parseRequestResponse<TSpace[]>(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};

export const publishSpace = async (space: any): Promise<TSpace> => {
  try {
    let res = await request.post('/spaces', space);
    return parseRequestResponse<TSpace>(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};

export const updateSpace = async (space: any) => {
  try {
    let res = await request.put('/spaces/' + space.id, space);
    return parseRequestResponse(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};

export const getSpaceByCode = async (code: string): Promise<TSpace> => {
  try {
    let res = await request.get('/spaces/code/' + code);
    return parseRequestResponse<TSpace>(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};

export const getSpaceByID = async (id: string): Promise<TSpace> => {
  try {
    let res = await request.get('/spaces/' + id);
    return parseRequestResponse<TSpace>(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};

export const deleteSpace = async (space: any) => {
  try {
    let res = await request.delete('/spaces/' + space.id);
    return parseRequestResponse(res);
  } catch (err) {
    console.log(err, 'could not load resource');
    throw err;
  }
};
