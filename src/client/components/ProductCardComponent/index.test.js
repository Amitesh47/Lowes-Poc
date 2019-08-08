import React from 'react';
import {shallow} from 'enzyme';
import ProductCard from './index';

describe('Hello Component', () => {
    it('Should render Hello component without errors', () => {
        const component = shallow(<ProductCard/>);
        const wrapper = component.find('.getCategory');
        expect(wrapper.length).toBe(1);
    })
})