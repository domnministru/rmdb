import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Search } from '../Search';

it('Should be rendered correctly', () => {
    const wrapper = shallow(<Search result={[]} />);
    expect(wrapper.find('.search_area')).toHaveLength(1);
});

it('should match the snapshot', () => {
    const wrapper = shallow(<Search result={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should match the snapshot with loading true', () => {
    const wrapper = shallow(<Search result={[]} loading={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should match the snapshot with error', () => {
    const wrapper = shallow(<Search result={[]} error={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should match the snapshot with isSearchResultsVisible', () => {
    const wrapper = shallow(<Search result={[]} isSearchResultsVisible={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('should call a function on input change', () => {
    const wrapper = shallow(<Search result={[]} />);
    const mockCallback = jest.fn();
    wrapper.find('.search_form').simulate('submit');
    expect(mockCallback).toBeCalled();
});