import React from 'react';
import { mount } from 'enzyme';
import Header from './index';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'



const mockStore = configureMockStore();

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Header Component', () => {
    let store
    beforeEach(() => {
        store = mockStore({
            count: { totalCount: 0 }
        });
    });

    it('Should render Header component without errors', () => {
        const component = mount(
            <Provider store={store}>
                <Header />
            </Provider>);
        const wrapper = findByTestAtrr(component, 'getHeader');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Logo component without errors', () => {
        const component = mount(
        <Provider store={store}>
            <Header />
        </Provider>);
        const wrapper = findByTestAtrr(component, 'getLogo');;
        expect(wrapper.length).toBe(1);
    });

    it('Should render Search component without errors', () => {
        const component = mount(
            <Provider store={store}>
            <Header />
        </Provider>);;
        const wrapper = findByTestAtrr(component, 'getSearch');;
        expect(wrapper.length).toBe(1);
    });

    it('Should render Cart component without errors', () => {
        const component = mount(
            <Provider store={store}>
            <Header />
        </Provider>);;
        const wrapper = findByTestAtrr(component, 'getCart');
        expect(wrapper.length).toBe(1);
    });

})