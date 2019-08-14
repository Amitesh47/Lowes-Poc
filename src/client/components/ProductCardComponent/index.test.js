import React from 'react';
import {shallow} from 'enzyme';
import ProductCard from './index';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

const setUp = (props={}) => {
    const component = shallow(<ProductCard {...props} />).dive();
    const wrapper2 = mount(
        <Provider store={store}>
          <ProductCard />
        </Provider>
      )
    return component;
};

describe('ProductCard Component Render', () => {
    let component;
        beforeEach(() => {
            component = setUp(); 
        });

    it('Should render <h3> Category component without errors', () => {
        // const component = shallow(<ProductCard/>);
        // const wrapper = component.find('.getCategory');
        const wrapper = findByTestAtrr(component, 'H3Category');
        expect(wrapper.length).toBe(1);
    })

    it('Should render 1 product card without errors', () => {
        const wrapper = findByTestAtrr(component, 'ProductCard');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product image without errors', () => {
        const wrapper = findByTestAtrr(component, 'ProductImage');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product title without errors', () => {
        const wrapper = findByTestAtrr(component, 'ProductTitle');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product description without errors', () => {
        const wrapper = findByTestAtrr(component, 'ProductDesc');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product ratings without errors', () => {
        const wrapper = findByTestAtrr(component, 'ProductRatings');
        expect(wrapper.length).toBe(1);
    })

    it('Should render cost of product without errors', () => {
        const wrapper = findByTestAtrr(component, 'ProductCost');
        expect(wrapper.length).toBe(1);
    })

    it('Should render Add To Cart button without errors', () => {
        const wrapper = findByTestAtrr(component, 'AddToCartButton');
        expect(wrapper.length).toBe(1);
    })

    it('Should render Decrement Count button without errors', () => {
        const wrapper = findByTestAtrr(component, 'DecrementCountButton');
        expect(wrapper.length).toBe(1);
    })

    it('Should render Increment Count button without errors', () => {
        const wrapper = findByTestAtrr(component, 'IncrementCountButton');
        expect(wrapper.length).toBe(1);
    })
})