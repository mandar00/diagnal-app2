import api from "../index";

export const makeRequests = (
  url,
  config = {},
  body = null,
  method = "get",
) => {
  return api[method](url, body, config)
    .then((response) => {
      // console.log(response);

      return {
        response: response,
        error: null,
      };
    })
    .catch((error) => {
      console.log("error", error);
      //TODO send data to logging service 
      //TODO handle 403 and 404 errors with a redirect to login and page not found pages respectivlyss
      return {
        error,
        response: null,
      };
    });
};

/*
   ? if you need to do something else when your request fails you can just get the response 
   ? and then interpret it and decide what to do next 
   ? here if the request fails we can do some other action than the genric actions that might have happend using makeRequest
*/
export const getResponse = async (
  url,
  config = {},
  body = null,
  method = "get"
) => {
  const response = await api[method](url, body, config);
  return response;
};
