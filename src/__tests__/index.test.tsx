import { shallow } from 'enzyme';
import React from 'react';
import Image from '..';

describe('Index', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper).toMatchSnapshot();
  });
});
