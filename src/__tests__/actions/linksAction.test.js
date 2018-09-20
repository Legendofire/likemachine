import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { getLinks } from "../../actions/linksAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let mock = new MockAdapter(axios);

describe("Links Actions", () => {
  afterEach(() => {
    mock.reset();
  });
  it("creates Finished_Getting_Links when fetching links is done", () => {
    let responseObj = [
      {
        id: "e6eafa77-137e-4cac-908f-1dca1c5343c1",
        url: "http://jensravens.com",
        title: "Jens Ravens",
        description:
          "I'm a Berlin-based iOS and Ruby on Rails developer working for nerdgeschoss. Also I'm organizing the monthly swift.berlin meetup and I'm obsessed with application architecture and maintainable code bases in Swift and Ruby on Rails.\n",
        image_url: "http://jensravens.de/img/profile.jpg",
        created_at: "2018-09-05T11:05:51.462Z",
        updated_at: "2018-09-19T19:39:03.339Z",
        liked: false,
        like_count: 0,
        owned: false
      }
    ];

    mock
      .onGet("https://likemachine-api.nerdgeschoss.de/links")
      .reply(200, responseObj);

    const expectedActions = [
      { type: "Getting_Links" },
      {
        type: "Finished_Getting_Links",
        payload: [
          {
            id: "e6eafa77-137e-4cac-908f-1dca1c5343c1",
            url: "http://jensravens.com",
            title: "Jens Ravens",
            description:
              "I'm a Berlin-based iOS and Ruby on Rails developer working for nerdgeschoss. Also I'm organizing the monthly swift.berlin meetup and I'm obsessed with application architecture and maintainable code bases in Swift and Ruby on Rails.\n",
            image_url: "http://jensravens.de/img/profile.jpg",
            created_at: "2018-09-05T11:05:51.462Z",
            updated_at: "2018-09-19T19:39:03.339Z",
            liked: false,
            like_count: 0,
            owned: false
          }
        ]
      }
    ];
    const store = mockStore({});
    return store.dispatch(getLinks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
