import axios from "axios";
import { AuthGetters } from "../helpers";
import axiosResult from "../axiosResponse";

export const getters = {
  ...AuthGetters,
  async getApiNoParam(route) {
    console.log("Token: " + this.gettoken().Token);
    try {
      let response = await axios
        .get(route, {
          headers: {
            token: AuthGetters.gettoken().Token,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            axiosResult.setReturnValues(true, null);
            console.log(response.data);
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
