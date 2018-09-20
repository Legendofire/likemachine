import axios from "axios";

let session_id = null;

export function setSessionId(ses_id){
  session_id = ses_id;
}

export function getLinks() {
  return function(dispatch) {
    dispatch({ type: "Getting_Links" });
    return axios
      .get("https://likemachine-api.nerdgeschoss.de/links", {
        headers: {
          Accept: "application/json",
          Authorization:  `Bearer ${session_id}`
        },
      })
      .then(response => {
        dispatch({ type: "Finished_Getting_Links", payload: response.data });
      })
      .catch(response => {
        dispatch({ type: "Error_Getting_links", payload: response });
      });
  };
}

export function like(id) {
  return function(dispatch) {
    dispatch({ type: "Liking" });
    return axios
      .post(`https://likemachine-api.nerdgeschoss.de/links/${id}/like`,{}, {
        headers: {
          Accept: "application/json",
          Authorization:  `Bearer ${session_id}`
        },
      })
      .then(response => {
        dispatch({ type: "Finished_Liking", payload: response.data });
        dispatch(getLinks());
      })
      .catch(response => {
        dispatch({ type: "Error_Liking", payload: response });
      });
  };
}

export function unlike(id) {
  return function(dispatch) {
    dispatch({ type: "UnLiking" });
    return axios
      .delete(`https://likemachine-api.nerdgeschoss.de/links/${id}/like`, {
        headers: {
          Accept: "application/json",
          Authorization:  `Bearer ${session_id}`
        },
      })
      .then(response => {
        dispatch({ type: "Finished_UnLiking", payload: response.data });
        dispatch(getLinks());
      })
      .catch(response => {
        dispatch({ type: "Error_UnLiking", payload: response });
      });
  };
}
export function AddLink(link, session_id) {
  return function(dispatch) {
    dispatch({ type: "Adding_Link" });
    return axios
      .post("https://likemachine-api.nerdgeschoss.de/links",{
        url: link.url
      },{
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session_id}`
        }
      })
      .then(response => {
        console.log(response);
        dispatch({ type: "Finished_Adding_Link", payload: response });
      })
      .catch(response => {
        dispatch({ type: "Error_Adding_link", payload: response });
      });
  };
}
