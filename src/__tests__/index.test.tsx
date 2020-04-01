import { shallow } from 'enzyme';
import React from 'react';
import ReactImage from '..';

describe('Index', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ReactImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
