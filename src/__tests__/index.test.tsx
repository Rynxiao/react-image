import { shallow } from 'enzyme';
import React from 'react';
import ReactImagePreview from '..';

describe('Index', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ReactImagePreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
