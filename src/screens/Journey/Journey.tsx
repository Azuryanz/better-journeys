import React from 'react';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import Filters from './components/Filters';
import Header from './components/Header';

import { Container } from './styles';
import { JourneysTable } from './components/JourneysTable/JourneysTable';

export const Journey: React.FC = () => {
  return (
    <Container>
      <Header />
      <Spacing vertical={20}/>
      <h3>Jornadas</h3>
      <Spacing vertical={10}/>
      <Flex direction="row" justify="space-between" align="flex-start">
        <Filters />
        <JourneysTable />
      </Flex>
    </Container>
  );
};
