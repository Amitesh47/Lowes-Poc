import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

describe('Header Component', () => {
    it('Should render Header component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.getHeader');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Logo component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.getLogo');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Search component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.getSearch');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Cart component without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.getCart');
        expect(wrapper.length).toBe(1);
    });
    
})