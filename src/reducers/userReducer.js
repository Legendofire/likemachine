export default function reducer(
  state = {
    user_id: "",
    session_id: "",
    username: "",
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
        user_id: action.payload.user_id,
        session_id: action.payload.session_id,
        username: action.payload.user_name,
        isAuthenticated: true,
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
    case "Logout_Start": {
      return {
        ...newState
      };
    }
    case "Logout_Done": {
      return {
        ...newState,
        user_id: '',
        session_id: '',
        username: '',
        isAuthenticated: false
      };
    }
    case "Logout_Error": {
      return {
        ...newState,
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
