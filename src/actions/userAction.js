import axios from "axios";

import { getLinks, setSessionId } from "./linksAction";

let session_id = null;

export function Authenticate(facebookResponse) {
  console.log("inside Authenticate");
  console.log(facebookResponse);
  return function(dispatch) {
    dispatch({ type: "FB_Authentication_Start" });
    return axios
      .post("https://likemachine-api.nerdgeschoss.de/session", {
        "facebook_token":facebookResponse.accessToken
      })
      .then(response => {
        setSessionId(response.data.id);
        session_id = response.data.id;
        dispatch({ type: "FB_Authentication_Done", payload: {
          user_id: response.data.user_id,
          session_id: response.data.id,
          user_name: facebookResponse.name
        }});
        dispatch(getLinks());
      })
      .catch(response => {
        dispatch({ type: "FB_Authentication_Error", payload: response });
      });
  };
}

export function Logout() {
  return function(dispatch) {
    dispatch({ type: "Logout_Start" });
    return axios
      .delete("https://likemachine-api.nerdgeschoss.de/session", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session_id}`
        }
      })
      .then(response => {
        dispatch({ type: "Logout_Done", payload: response.data });
        dispatch(getLinks());
      })
      .catch(response => {
        dispatch({ type: "Logout_Error", payload: response });
      });
  };
}
