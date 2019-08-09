import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo, Search, Cart }  from '../src/client/components/Header/styles'
import CartImage from '../utils/assets/cart.png'

const image = {
  src: CartImage,
  alt: 'My cart',
};

storiesOf('Header', module)
  .add('with Logo', () => <Logo>Poc-Shop</Logo>)
  .add('with Search Bar', () => <Search/>)
  .add('with Cart ', () => <Cart src={image.src} alt={image.alt}/>)
  

