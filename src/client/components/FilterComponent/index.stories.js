import React from 'react';
import { storiesOf } from '@storybook/react';
import filterAddButton from '../../../../public/utils/assets/addIcon.png'
import { FilterHeader, FilterSection, AddFilterButtonImage } from './styles'

const filterButton = {
    src: filterAddButton,
    alt: 'Add'
}



storiesOf('FilterComponent', module)
    .add('with Filter Header', () => <FilterHeader>Filters</FilterHeader>)
    .add('with Filter Section', () => <FilterSection >Filter Options </FilterSection>)
    .add('with Filter Plus Button ', () => <AddFilterButtonImage src={filterButton.src} alt={filterButton.alt} /> )
