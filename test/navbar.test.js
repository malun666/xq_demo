import React from 'react';
// import { shallow, mount, render } from 'enzyme'
import Card from './../src/components/card';
import renderer from 'react-test-renderer';

test('get navbar menu from server: ', () => {
  const component = renderer.create(<Card></Card>);
  let tree = component.toJSON();
  // console.log(tree)
  expect(tree.props.className).toContain('card');
});
