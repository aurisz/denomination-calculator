import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';

import InputBox from './InputBox';

const testProps = {
  value: '',
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};

const setup = () => {
  const utils = render(<InputBox {...testProps} />);
  const input = utils.getByLabelText('amount-input');
  return {
    input,
    ...utils,
  };
};

afterEach(cleanup);

describe('InputBox', () => {
  const component = <InputBox {...testProps} />;

  it('should renders without crash', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });

  it('changing a form works correctly', () => {
    const { input } = setup();

    expect(input.value).toBe('');

    fireEvent.change(input, {
      target: { value: 'New Amount' },
    });

    expect(testProps.onChange).toHaveBeenCalled();
  });

  it('submiting a form works correctly', () => {
    const { input } = setup();

    fireEvent.submit(input, {
      target: { text1: { value: 'Text' } },
    });

    expect(testProps.onSubmit).toHaveBeenCalled();
  });
});
