import React from 'react';
import { storiesOf } from '@storybook/react';
import cartImage from '../../../../public/utils/assets/cart.png'
import { Logo, FullSearchInput, Cart } from './styles'
import Header from './index'
import { Provider } from 'react-redux';

const imageOfCart = {
    src: cartImage,
    alt: 'My cart',
};

const store = {
    getState: () => {
        return {
            count: {
                totalCount: 0
            }
        }
    },
    subscribe: () => 0,
}

storiesOf('Header', module)
    .add('with Logo', () => <Logo>Poc-Shop</Logo>)
    .add('with Search Bar', () => <FullSearchInput />)
    .add('with Cart ', () => <Cart src={imageOfCart.src} alt={imageOfCart.alt} />)

storiesOf('Whole Navbar', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with Logo,Seacrh Bar, Cart', () => <Header />)