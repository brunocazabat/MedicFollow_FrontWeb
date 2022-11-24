import axios from "axios";
// import { AuthGetters } from "../helpers";
import axiosResult from "../axiosResponse";

export const getters = {
  getApiNoParam(route) {
    // TODO: Function to fix after EIP console.log("userToken: " + AuthGetters.gettoken());
    try {
      let response = axios
        .get(route, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVXVpZCI6IjEwYjMwNjFmLTUzY2ItNDBlOS05MmEzLWMyNzM0NDE3ODZhNiIsImlhdCI6MTY2NjYwNjUzNiwiZXhwIjoxNjY2NjEwMTM2fQ.N-p3NiR5DfGOVWqLazmR-6z82he1oHiYlqS8275Kaz0",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            axiosResult.setReturnValues(true, null);
            return response.data;
          } else {
            axiosResult.setReturnValues(false, response.status);
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
