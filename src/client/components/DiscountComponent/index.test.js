import React from 'react';
import { mount } from 'enzyme';
import Discount from './index'


export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Discount Component', () => {

    it('Should render Discount component if there is discount', () => {
        let productDetails = {
            offerMessage: "some offer"
        }
        const component = mount(<Discount discount={productDetails.offerMessage}/>);
        expect(component.findWhere(el => el.is(Discount) && el.prop('discount') === 'some offer').length).toEqual(1)
    })

    it('Should not render Discount component if there is no discount', () => {
        let productDetails = {
            offerMessage: null
        }
        const component = mount(<Discount discount={productDetails.offerMessage}/>);
        expect(component.findWhere(el => el.is(Discount) && el.prop('discount') === null).length).toEqual(1)
    })
})