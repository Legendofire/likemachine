export default function reducer(
  state = {
    fbToken: "",
    sessionID: "",
    name: "",
    isAuthenticated: false,
    authenticating: false,
    error: null
  },
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case "FB_Authentication_Start": {
      return {
        ...newState,
        authenticating: true
      };
    }
    case "FB_Authentication_Done": {
      return {
        ...newState,
        fbToken: action.payload.fbToken,
        sessionID: action.payload.sessionID,
        authenticating: false
      };
    }
    case "FB_Authentication_Error": {
      return {
        ...newState,
        authenticating: false,
        error: action.payload.error
      };
    }
    default: {
      return {
        ...newState
      };
    }
  }
}
