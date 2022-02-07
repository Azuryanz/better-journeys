import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewJourneyModal({isOpen, onRequestClose}: Props) {
  const [name, setName] = useState('');

  async function handleCreateNewJourney(event: FormEvent) {
    event.preventDefault();
    onRequestClose();
  }

  return (
    <Modal 
      closeTimeoutMS={300}
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    > 
      <Container onSubmit={handleCreateNewJourney}>
        <h3>Nova Jornada</h3>
        <label htmlFor='name'>Dê um <strong>nome</strong> para esta Jornada</label>
        <input 
          type="text"
          id='name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <p>Você poderá alterar essa informação depois</p>

        <span>
          <button type="submit">Continuar</button>
          <div onClick={onRequestClose}>Cancel</div>
        </span>
        
      </Container>
    </Modal>
  );
};
