import axios from "axios";

export function Authenticate(response) {
  console.log("inside Authenticate");
  console.log(response);
  return function(dispatch) {
    dispatch({ type: "FB_Authentication_Start" });
    axios
      .post("https://likemachine-api.nerdgeschoss.de/session", {
        headers: { Accept: "application/json" },
        body: {"facebook_token":response.accessToken}
      })
      .then(response => {
        console.log("inside then");
        console.log(response);
        dispatch({ type: "FB_Authentication_Done", payload: response.data });
      })
      .catch(response => {
        console.log("inside catch");
        console.log(response);
        dispatch({ type: "FB_Authentication_Error", payload: response });
      });
  };
}

export function Logout() {
  return function(dispatch) {
    dispatch({ type: "FB_Authentication_Start" });
    axios
      .delete("https://likemachine-api.nerdgeschoss.de/session", {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        console.log(response);
        dispatch({ type: "FB_Authentication_Done", payload: response.data });
      })
      .catch(response => {
        dispatch({ type: "FB_Authentication_Error", payload: response });
      });
  };
}
