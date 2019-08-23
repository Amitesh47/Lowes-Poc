import React from 'react';
import {mount,shallow} from 'enzyme';
import ProductCard from './index';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore();

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

// const setUp = (props={}) => {
//     const component = shallow(<ProductCard {...props} />).dive();
//     const wrapper2 = mount(
//         <Provider store={store}>
//           <ProductCard />
//         </Provider>
//       )
//     return component;
// };

describe('ProductCard Component Render', () => {
    let store
    // let component;
        beforeEach(() => {
            store = mockStore({
                wholeData: [],
                categoryFilter: [],
                priceFilter: [],
                ratingFilter: [],
                discountFilter: [],
                priceRange: [],
                count: {quantityById: [], totalCount: 0 }
            }); 
        });
        let productDetails={
            "_id": "5d0654be2eb44f0904467496",
                        "name": "Kitchen Product1",
                        "description": "Minim ut in nostrud ullamco adipisicing Lorem elit laborum id deserunt qui non sint. Aliqua aute dolor labore nulla excepteur voluptate laborum commodo non consequat commodo esse. Et consequat esse duis ad proident eiusmod. Do eiusmod sit irure enim magna incididunt mollit non dolor aliqua nisi.",
                        "category": "kitchen",
                        "price": 88,
                        "offerMessage": "10% Off",
                        "outOfStock": false,
                        "availableStock": 66,
                        "ratingInfo": {
                          "rating": 4,
                          "userCount": 71
                        },
                        "thumbnail": "https://placeimg.com/170/170/tech"
        }

    // it('Should render <h3> Category component without errors', () => {
    //     // const component = shallow(<ProductCard/>);
    //     // const wrapper = component.find('.getCategory');
    //     const component = mount(
    //         <Provider store={store}>
    //             <ProductCard productDetails={productDetails} />
    //         </Provider>);
    //     const wrapper = findByTestAtrr(component, 'H3Category');
    //     expect(wrapper.length).toBe(1);
    // })

    it('Should render 1 product card without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'ProductCard');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product image without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'ProductImage1');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product title without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'ProductTitle');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product description without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'ProductDesc');
        expect(wrapper.length).toBe(1);
    })

    it('Should render product ratings without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'ProductRatings');
        expect(wrapper.length).toBe(1);
    })

    it('Should render cost of product without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'ProductCost');
        expect(wrapper.length).toBe(1);
    })

    it('Should render Add To Cart button without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'AddToCartButton');
        expect(wrapper.length).toBe(1);
    })

    it('Should render Decrement Count button without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'DecrementCountButton');
        expect(wrapper.length).toBe(1);
    })

    it('Should render Increment Count button without errors', () => {
        const component = mount(
            <Provider store={store}>
                <ProductCard productDetails={productDetails} />
            </Provider>);        
        const wrapper = findByTestAtrr(component, 'IncrementCountButton');
        expect(wrapper.length).toBe(1);
    })
})