const INITIAL_STATE = {
  apiHealth: 200,
  currentUserData: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_API_STATUS':
      return {
        ...state, apiHealth: action.payload
      }

    case 'GET_USER_DATA_FROM_SESSION':
      return {
        ...state, currentUserData: action.payload
      }

    default:
      return {
        ...state
      };
  }
}