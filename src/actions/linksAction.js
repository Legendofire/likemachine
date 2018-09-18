import axios from "axios";

export function getLinks(msg, context) {
  return function(dispatch) {
    dispatch({ type: "Getting_Links" });
    axios
      .get("https://likemachine-api.nerdgeschoss.de/links")
      .then(response => {
        console.log(response);
        dispatch({ type: "Finished_Getting_Links", payload: response });
      })
      .catch(response => {
        dispatch({ type: "Error_Getting_links", payload: response });
      });
  };
}

export function like(id){

}

export function unlike(id){

}

export function AddLink(link){
  return function(dispatch) {
    dispatch({ type: "Adding_Link" });
    axios
      .get("https://likemachine-api.nerdgeschoss.de/links")
      .then(response => {
        console.log(response);
        dispatch({ type: "Finished_Adding_Link", payload: response });
      })
      .catch(response => {
        dispatch({ type: "Error_Adding_link", payload: response });
      });
  };
}
