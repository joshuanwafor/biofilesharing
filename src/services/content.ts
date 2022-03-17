import request from '../configure/request';

export const getFeed = async () => {
  try {
    let res = await request.get('/public/resources');
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};

export const getCourses = async () => {
  try {
    let res = await request.get('/public/courses');
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};
