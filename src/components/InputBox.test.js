import React from 'react';
import { shallow } from 'enzyme';

import InputBox from './InputBox';

describe('InputBox', () => {
  const component = (
    <InputBox value="" onChange={jest.fn()} onSubmit={jest.fn()} />
  );

  it('should renders without crash', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });
});
