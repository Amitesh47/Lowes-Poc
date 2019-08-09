import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Header Component', () => {
    it('Should render Header component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = findByTestAtrr(component, 'getHeader');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Logo component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = findByTestAtrr(component, 'getLogo');;
        expect(wrapper.length).toBe(1);
    });

    it('Should render Search component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = findByTestAtrr(component, 'getSearch');;
        expect(wrapper.length).toBe(1);
    });

    it('Should render Cart component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = findByTestAtrr(component, 'getCart');
        expect(wrapper.length).toBe(1);
    });
    
})