import components from './index';

describe('module exports', () => {
  it('exports an object of the proper shape', () => {
    expect(typeof components).toEqual('object');
    expect(components).toHaveProperty('Row');
    expect(components).toHaveProperty('Column');
  });
});
