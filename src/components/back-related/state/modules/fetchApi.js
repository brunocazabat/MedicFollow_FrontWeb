import axios from "axios";
// import { AuthGetters } from "../helpers";
import axiosResult from "../axiosResponse";

export const getters = {
  getApiNoParam(route, userToken) {
    console.log("userToken: " + userToken);
    try {
      let response = axios
        .get(route, {
          headers: {
            token: userToken,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            axiosResult.setReturnValues(true, null);
            console.log("response in method: " + response.data);
            return response.data;
          } else {
            axiosResult.setReturnValues(false, response.status);
            console.log(response.status);
            return response.data;
          }
        });
      return response;
    } catch (error) {
      axiosResult.setReturnValues(false, error.result);
      return error.result;
    }
  },
};
