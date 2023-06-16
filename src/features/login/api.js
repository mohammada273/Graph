import axios from 'axios';
import qs from "qs";

export const fetchLoginSubmit = async (info) => {

  let response = await axios.post(
    `${process.env.REACT_APP_LOGIN_CHECK_INFO}`,
    qs.stringify(info),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return response;
};