const SET_API_STATUS = 'SET_API_STATUS';
const GET_USER_DATA_FROM_SESSION = 'GET_USER_DATA_FROM_SESSION';

/**
 * Set the API health to a desired status code for component testing. 
 * @param {string} statusCode: A string represnting the network status code of the api. 
 */
export const setAPIStatus = (statusCode) => async dispatch => {
  dispatch({
    type: SET_API_STATUS,
    payload: statusCode
  });
}

/**
 * Fetches the user data for the current active session.  
 */
export const getUserDataFromSession = () => async dispatch => {
  let data = await fetch('/api/currentuser');
  const formattedData = await data.json();;
  dispatch({
    type: GET_USER_DATA_FROM_SESSION,
    payload: formattedData
  });
}
