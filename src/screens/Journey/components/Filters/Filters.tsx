import React, { useEffect, useState, useContext } from 'react';
import Filter from './Filter';

import { Container } from './styles';
import { FiltersContext } from 'src/FiltersContext';



export const Filters: React.FC = () => {
  const filters = useContext(FiltersContext);

  return (
    <Container>
      {filters.map(({}, index) => {
        return (
          <Filter key={index} id={index} />
        )
      })}
    </Container>
  );
};
