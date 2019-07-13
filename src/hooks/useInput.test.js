import React from 'react';
import { shallow } from 'enzyme';
import { useInput } from './useInput';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe('useFormField', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useInput('')} />);

    let { hook } = wrapper.find('div').props();
    expect(hook.value).toEqual('');

    wrapper = shallow(<HookWrapper hook={() => useInput('Rp17.500,00')} />);
    // destructuring objects - {} should be inside brackets - () to avoid syntax error
    ({ hook } = wrapper.find('div').props());
    expect(hook.value).toEqual('Rp17.500,00');
  });

  it('should change the right value', () => {
    const wrapper = shallow(
      <HookWrapper hook={() => useInput('Rp17.500,00')} />
    );

    let { hook } = wrapper.find('div').props();
    expect(hook.value).toEqual('Rp17.500,00');

    hook.onChange({ target: { value: '15000' } });

    ({ hook } = wrapper.find('div').props());
    expect(hook.value).toEqual('15000');
  });
});
