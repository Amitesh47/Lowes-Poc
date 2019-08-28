import React from 'react';
import { storiesOf } from '@storybook/react';


import { 
    ProductImage, 
    ProductTitle, 
    ProductDesc,
    ProductRatings,
    ProductPrice,
    AddToCartButon,
    CartButtonImage,
    CartCount
   } from './styles'
  import addCart from '../../../../public/utils/assets/addIcon.png'
  import subCart from '../../../../public/utils/assets/subIcon.png'
  
  
  
  
  const imageOfAddButton = {
    src : addCart,
    alt: 'Add'
  }
  
  const imageOfSubButton = {
    src : subCart,
    alt: 'Subtract'
  }
  
  
  
  storiesOf('ProductCard Component', module)
    .add('with Product Image', () => <ProductImage src="https://placehold.it/350x150/water"/>)
    .add('with Product Title', () => <ProductTitle >Product Title</ProductTitle>)
    .add('with Product Description', () => <ProductDesc>This is Product Description Story</ProductDesc>)
    .add('with Product Rating', () => <ProductRatings>10</ProductRatings>)
    .add('with Product Price', () => <ProductPrice>$8989.67</ProductPrice>)
    .add('with Add to Cart Button', () => <AddToCartButon>Add to Cart</AddToCartButon>)
    .add('with Increment Button', () => <CartButtonImage src={imageOfAddButton.src} alt={imageOfAddButton.alt} />)
    .add('with Decrement Button', () => <CartButtonImage src={imageOfSubButton.src} alt={imageOfSubButton.alt} />)
    .add('with Cart Count', () => <CartCount>1</CartCount>)