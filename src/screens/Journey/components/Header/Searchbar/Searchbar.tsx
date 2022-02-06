import React from 'react';
import { IoSearch } from 'react-icons/io5'

import { Container } from './styles';

export const Searchbar: React.FC = () => {
  return (
    <Container>
      <label htmlFor='searchbar' ><IoSearch size={14} /></label>
      <input type="text" placeholder="Buscar" name="searchbar" id="searchbar"/>
    </Container>
  );
};
