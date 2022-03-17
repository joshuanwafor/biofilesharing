import {firebase} from '@react-native-firebase/auth';
import {User} from '../api';
import request, {setHeaderToken} from '../configure/request';

export const getAuth = async () => {
  try {
    let token = await firebase.auth().currentUser?.getIdToken(true);
    if (token == undefined) return;
    let res = await request.post('/user/auth', {
      token: token,
    });
    console.log("got token hopefully");
    setHeaderToken(res.data.token);
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};

export const getProfile = async () => {
  try {
    let res = await request.get('/user');
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.log(err, 'could not load profile resource');
  }
};

export const updateProfile = async (user: User) => {
  try {
    let res = await request.put('/public/user', {
      ...user,
    });
    return res;
  } catch (err) {
    console.log(err, 'could not load resource');
  }
};
