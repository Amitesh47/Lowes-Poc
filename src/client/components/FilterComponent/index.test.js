import React from "react";
import { mount, shallow } from "enzyme";
import Filter from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

// const setUp = () => {
//     const component = mount(
//         <Provider store={store}>
//             <Filter />
//     </Provider>);
//     return component;
// };

describe("Filter Component Render", () => {
  // let component
  let store;
  beforeEach(() => {
    store = mockStore({
      wholeData: [],
      categoryFilter: [],
      priceFilter: [],
      ratingFilter: [],
      discountFilter: [],
      priceRange: []
    });
    // component = setUp();
  });

  it("Should render 1 Filter List component without errors", () => {
    // const component = shallow(<ProductCard/>);
    // const wrapper = component.find('.getCategory');
    const component = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const wrapper = findByTestAtrr(component, "FilterListCard");
    expect(wrapper.length).toBe(1);
  });

  it("Should render 1 Filter List header without errors", () => {
    const component = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const wrapper = findByTestAtrr(component, "FilterListHeader");
    expect(wrapper.length).toBe(1);
  });

  it("Should render 4 Filter List Items without errors", () => {
    const component = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const wrapper = findByTestAtrr(component, "FilterListItem");
    expect(wrapper.length).toBe(4);
  });

  it("Should render 4 Add Filter Buttons(+) without errors", () => {
    const component = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const wrapper = findByTestAtrr(component, "AddFilterButton");
    expect(wrapper.length).toBe(4);
  });

  it("Should render 4 Dropdowns on clicking AddFilterButton without errors", () => {
    const component = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const wrapper = findByTestAtrr(component, "FilterDropDownBody");
    expect(wrapper.length).toBe(4);
  });

  it("Should render 1 FilterDetailComponent on clicking AddFilterButton without errors", () => {
    const component = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const wrapper = findByTestAtrr(component, "FilterDetailsCard");
    expect(wrapper.length).toBe(1);
  });
});
