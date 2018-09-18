import React from 'react';
import FloatingButton from './FloatingButton';
import renderer from 'react-test-renderer';

test('Floating Button Rotates to + when open is false', () => {
  const component = renderer.create(
    <FloatingButton isFormOpen={false} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Floating Button Rotates to x when open is true', () => {
  const component = renderer.create(
    <FloatingButton isFormOpen={true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
