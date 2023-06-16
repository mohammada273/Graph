import axios from 'axios';

export const fetchFlightList = async (info) => {

  // let response = await axios.get(
  //   `${process.env.REACT_APP_FLIGHT_LIST}?page=${info.pagination.page}&size=${info.pagination.size}`,
  //   {
  //     headers: {
  //       'Authorization': `Bearer ${info.token}`
  //     },
  //   }
  // );

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_FLIGHT_LIST}?page=${info.pagination.page}&size=${info.pagination.size}`,
    headers: {
      Authorization: `Bearer ${info.token}`,
    },
  };
  let response = axios.request(config)
      .then((response) => {
        return response;
      });

  return response;
};

export const fetchUsername = async (token) => {

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_GET_USERNAME}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let response = axios.request(config)
    .then((response) => {
      return response;
    });
  return response;
}
export const fetchLogout = async (token) => {

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_LOGOUT}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let response = axios.request(config)
    .then((response) => {
      return response;
    })
  return response;
}