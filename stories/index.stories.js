import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo, Search, Cart }  from '../src/client/components/Header/styles'
import { FilterHeader, FilterSection,AddFilterButton } from '../src/client/components/FilterComponent/styles'
import { 
  ProductImage, 
  ProductTitle, 
  ProductDesc,
  ProductRatings,
  ProductPrice,
  AddToCartButon,
  CartButtonImage,
  CartCount
 } from '../src/client/components/ProductCardComponent/styles'
import cartImage from '../public/utils/assets/cart.png'
import filterAddButton from '../public/utils/assets/addIcon_Filter.png'
import addCart from '../public/utils/assets/addIcon.png'
import subCart from '../public/utils/assets/subIcon.png'

const imageOfCart = {
  src: cartImage,
  alt: 'My cart',
};

const filterButton = {
  src : filterAddButton,
  alt: 'Add'
}

const imageOfAddButton = {
  src : addCart,
  alt: 'Add'
}

const imageOfSubButton = {
  src : subCart,
  alt: 'Subtract'
}

storiesOf('Header', module)
  .add('with Logo', () => <Logo>Poc-Shop</Logo>)
  .add('with Search Bar', () => <Search/>)
  .add('with Cart ', () => <Cart src={imageOfCart.src} alt={imageOfCart.alt}/>)
  
  storiesOf('FilterComponent', module)
  .add('with Filter Header', () => <FilterHeader>Filters</FilterHeader>)
  .add('with Filter Section', () => <FilterSection >Filter Options </FilterSection>)
  .add('with Filter Plus Button ', () => <AddFilterButton src={filterButton.src} alt={filterButton.alt}/>)
  
  storiesOf('ProductCard Component', module)
  .add('with Product Image', () => <ProductImage src="https://tinyurl.com/y5nmss4b"/>)
  .add('with Product Title', () => <ProductTitle >Product Title</ProductTitle>)
  .add('with Product Description', () => <ProductDesc>This is Product Description Story</ProductDesc>)
  .add('with Product Rating', () => <ProductRatings>10</ProductRatings>)
  .add('with Product Price', () => <ProductPrice>$8989.67</ProductPrice>)
  .add('with Add to Cart Button', () => <AddToCartButon>Add to Cart</AddToCartButon>)
  .add('with Increment Button', () => <CartButtonImage src={imageOfAddButton.src} alt={imageOfAddButton.alt} />)
  .add('with Decrement Button', () => <CartButtonImage src={imageOfSubButton.src} alt={imageOfSubButton.alt} />)
  .add('with Cart Count', () => <CartCount>1</CartCount>)