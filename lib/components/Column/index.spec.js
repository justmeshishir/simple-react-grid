import React from 'react';
import renderer from 'react-test-renderer';

import Column from './index';

describe('snapshot', () => {
  it('renders correctly with defaults', () => {
    const tree = renderer.create(
      <Column />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with sm="6"', () => {
    const tree = renderer.create(
      <Column sm="6" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with md="6"', () => {
    const tree = renderer.create(
      <Column md="6" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with lg="6"', () => {
    const tree = renderer.create(
      <Column lg="6" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
