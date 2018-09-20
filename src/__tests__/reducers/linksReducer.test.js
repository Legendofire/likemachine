import reducer from "../../reducers/linksReducer";

describe("Links Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {"links": []})).toEqual({"links": []});
  });

  it("should handle Finished_Getting_Links", () => {
    const initialState = {links:[]};
    const Action = {
      type: "Finished_Getting_Links",
      payload: [{
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
      }]
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, Action)).toEqual({
      "links": [
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
    });
  });

});
