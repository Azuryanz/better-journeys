import React, { useContext } from 'react';

import { FiltersContext } from 'src/FiltersContext';

import { Container } from './styles';
import Filter from './Filter';

export const Filters = () => {
  const {filters} = useContext(FiltersContext);

  return (
    <Container>
      {filters?.map(({}, index:number) => {
        return (
          <Filter key={index} id={index} />
        )
      })}
    </Container>
  );
};
