import React, { useState } from 'react';

import Flex from '@components/Flex';
import Spacing from '@components/Spacing';

import Filters from './components/Filters';
import Header from './components/Header';

import { Container } from './styles';
import { JourneysTable } from './components/JourneysTable/JourneysTable';
import NewJourneyModal from './components/NewJourneyModal';

export const Journey: React.FC = () => {
  const [isNewJourneyModalOpen, setIsNewJourneyModalOpen] = useState(false);

  function handleOpenNewJourneyModal() {
    setIsNewJourneyModalOpen(true);
  }

  function handleCloseNewJourneyModal() {
    setIsNewJourneyModalOpen(false);
  }

  return (
    <Container>
      <Header onOpenNewJourneyModal={handleOpenNewJourneyModal}/>
      <Spacing vertical={20}/>
      <h3>Jornadas</h3>
      <Spacing vertical={10}/>
      <Flex direction="row" justify="space-between" align="flex-start">
        <Filters />
        <JourneysTable />
      </Flex>

      <NewJourneyModal isOpen={isNewJourneyModalOpen} onRequestClose={handleCloseNewJourneyModal} />
    </Container>
  );
};
