import React from 'react';
import { storiesOf } from '@storybook/react';
import cartImage from '../../../../public/utils/assets/cart.png'
import { Logo, FullSearchInput, Cart }  from './styles'

const imageOfCart = {
    src: cartImage,
    alt: 'My cart',
  };

  storiesOf('Header', module)
  .add('with Logo', () => <Logo>Poc-Shop</Logo>)
  .add('with Search Bar', () => <FullSearchInput/>)
  .add('with Cart ', () => <Cart src={imageOfCart.src} alt={imageOfCart.alt}/>)