import React from 'react';
import renderer from 'react-test-renderer';

import Link from './Link';

test('Link Renders With Supplied Data', () => {
  const component = renderer.create(
    <Link key={1}
      liked={true}
      count={302}
      title={"This is a title"}
      description={"This is a description"}
      url={"http://www.google.com"}
      src={"http://www.facebook.com"}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
