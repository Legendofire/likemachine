import React from 'react';
import FloatingForm from '../../../../../modules/AddLinkForm/Components/FloatingForm/FloatingForm';
import renderer from 'react-test-renderer';

test('Floating Form disappears when open is false', () => {
  const component = renderer.create(
    <FloatingForm isFormOpen={false} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Floating Form disappears when open is true', () => {
  const component = renderer.create(
    <FloatingForm isFormOpen={true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
