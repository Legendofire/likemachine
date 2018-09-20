import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import LinksContainer from '../../../../modules/Links/Containers/LinksContainer';

const fakeStore = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

test('LinksContainer renders the supplied links correctly', () => {
  const store = fakeStore({
    Links: {
      links: [
        {
          id: "e6eafa77-137e-4cac-908f-1dca1c5343c1",
          url: "http://jensravens.com",
          title: "Jens Ravens",
          description:
            "I'm a Berlin-based iOS and Ruby on Rails developer working for nerdgeschoss. Also I'm organizing the monthly swift.berlin meetup and I'm obsessed with application architecture and maintainable code bases in Swift and Ruby on Rails.\n",
          image_url: "http://jensravens.de/img/profile.jpg",
          created_at: "2018-09-05T11:05:51.462Z",
          updated_at: "2018-09-05T11:50:38.338Z",
          liked: false,
          like_count: 0,
          owned: false
        },
        {
          id: "893ca4ce-5d7e-434a-8128-1a3b01dbb3be",
          url: "http://nerdgeschoss.de",
          title: "nerdgeschoss",
          description:
            "We're a product development studio, busy designing and building tomorrow's apps.",
          image_url:
            "https://nerdgeschoss.de/de9b1b02ad130cc0c842cda20352c713.svg",
          created_at: "2018-09-05T11:03:40.440Z",
          updated_at: "2018-09-06T06:46:28.237Z",
          liked: false,
          like_count: 0,
          owned: false
        }
      ]
    }
  });

  const component = renderer.create(
    <Provider store={store}>
      <LinksContainer />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
