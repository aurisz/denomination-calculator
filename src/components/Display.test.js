import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('Display', () => {
  const testResults = {
    totalFractions: 2,
    remaining: 0,
    fractions: [
      { count: 1, value: 10000, total: 10000 },
      { count: 1, value: 5000, total: 5000 },
    ],
  };

  it('should renders without crash', () => {
    const wrapper = shallow(<Display isError={false} result={null} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should renders if empty', () => {
    const tree = renderer
      .create(<Display isError={false} result={null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders invalid input', () => {
    const tree = renderer.create(<Display isError result={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders valid results without remains', () => {
    const tree = renderer
      .create(<Display isError={false} result={testResults} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders valid results with remains', () => {
    testResults.remaining = 20;

    const tree = renderer
      .create(<Display isError={false} result={testResults} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
