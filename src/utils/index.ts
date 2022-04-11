import Snackbar from "react-native-snackbar";
import axios,{AxiosResponse} from 'axios';

export function parseRequestResponse<T>(response: AxiosResponse): T {
    const status = response.status;
    const data: T = response.data;
  
  
    switch (status) {
      case 200:
        // Success
        return data;
      case 201:
        //Operation successful, new record added
        return data;
      case 300:
        Snackbar.show({
          text: "300 error",
          duration: Snackbar.LENGTH_SHORT,
        });
        throw '300 Error';
      case 400:
        // Request not supported or Method type not valid
        Snackbar.show({
          text: "Client Error",
          duration: Snackbar.LENGTH_SHORT,
        });
        throw '400 Error';
      case 500:
          // Request not supported or Method type not valid
          Snackbar.show({
            text: "Server Error",
            duration: Snackbar.LENGTH_SHORT,
          });
          throw '400 Error';
      case 404:
        throw data;
      default:
        console.log(data)
        console.log("unknown error occured")
        throw "Unknow request error";
    }
}