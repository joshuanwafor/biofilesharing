import request from '../configure/request';

export const getSpaces = async () => {
  try {
    let res = await request.get('/public/courses');
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};

export const getMySpaces = async () => {
  try {
    let res = await request.get('/courses');
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};

export const publishSpace = async (space: any) => {
  try {
    let res = await request.get('/public/courses');
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};

export const updateSpace = async (space: any) => {
  try {
    let res = await request.put('/courses');
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};
