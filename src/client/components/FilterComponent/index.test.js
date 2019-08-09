import React from 'react';
import {shallow} from 'enzyme';
import Filter from './index';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

const setUp = (props={}) => {
    const component = shallow(<Filter {...props} />);
    return component;
};

describe('Filter Component Render', () => {
    let component;
        beforeEach(() => {
            component = setUp(); 
        });

    it('Should render 1 Filter List component without errors', () => {
        // const component = shallow(<ProductCard/>);
        // const wrapper = component.find('.getCategory');
        const wrapper = findByTestAtrr(component, 'FilterListCard');
        expect(wrapper.length).toBe(1);
    })

    it('Should render 1 Filter List header without errors', () => {
        const wrapper = findByTestAtrr(component, 'FilterListHeader');
        expect(wrapper.length).toBe(1);
    })

    it('Should render 4 Filter List Items without errors', () => {
        const wrapper = findByTestAtrr(component, 'FilterListItem');
        expect(wrapper.length).toBe(4);
    })

    it('Should render 4 Add Filter Buttons(+) without errors', () => {
        const wrapper = findByTestAtrr(component, 'AddFilterButton');
        expect(wrapper.length).toBe(4);
    })

    it('Should render 4 Dropdowns on clicking AddFilterButton without errors', () => {
        const wrapper = findByTestAtrr(component, 'FilterDropDownBody');
        expect(wrapper.length).toBe(4);
    })

    it('Should render 1 FilterDetailComponent on clicking AddFilterButton without errors', () => {
        const wrapper = findByTestAtrr(component, 'FilterDetailsCard');
        expect(wrapper.length).toBe(1);
    })
})