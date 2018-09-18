export default function reducer(
  state = {
    links: []
  },
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case "Getting_Links": {
      return {
        ...newState
      };
    }
    case "Finished_Getting_Links": {
      return {
        ...newState,
        links: action.payload
      };
    }
    case "Error_Getting_links": {
      return {
        ...newState
      };
    }
    case "Liking": {
      return {
        ...newState
      };
    }
    case "Finished_Liking": {
      return {
        ...newState
      };
    }
    case "Error_Liking": {
      return {
        ...newState
      };
    }
    case "UnLiking": {
      return {
        ...newState
      };
    }
    case "Finished_UnLiking": {
      return {
        ...newState
      };
    }
    case "Error_UnLiking": {
      return {
        ...newState
      };
    }
    case "Update_Form": {
      return {
        ...newState
      };
    }
    case "Adding_Link": {
      return {
        ...newState
      };
    }
    case "Finished_Adding_Link": {
      return {
        ...newState
      };
    }
    default: {
      return {
        ...newState
      };
    }
  }
}
