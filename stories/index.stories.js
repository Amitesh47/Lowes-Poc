import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo, Search, Cart }  from '../src/client/components/Header/styles'
import cartImage from '../public/utils/assets/cart.png'

const imageOfCart = {
  src: cartImage,
  alt: 'My cart',
};

storiesOf('Header', module)
  .add('with Logo', () => <Logo>Poc-Shop</Logo>)
  .add('with Search Bar', () => <Search/>)
  .add('with Cart ', () => <Cart src={imageOfCart.src} alt={imageOfCart.alt}/>)
  

