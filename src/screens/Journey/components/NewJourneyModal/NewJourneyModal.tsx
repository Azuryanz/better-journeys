import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { v4 } from 'uuid'

import { Container } from './styles';
import axios from 'axios';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewJourneyModal({isOpen, onRequestClose}: Props) {
  const [name, setName] = useState('');
  const [recipients, setRecipients] = useState('');
  const [success, setSuccess] = useState('');
  const [status, setStatus] = useState(0);

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

        <label htmlFor='recipients'>Informa a <strong>quantidade</strong> de recipientes</label>
        <input 
          type="text"
          id="recipients"
          value={recipients}
          onChange={event => setRecipients(event.target.value)}
        />

        <label htmlFor='success'>Informe a <strong>porcentagem</strong> de sucesso</label>
        <input 
          type="text"
          id='success'
          value={success}
          onChange={event => setSuccess(event.target.value)}
        />

        <label htmlFor='status'>Insira a <strong>categoria</strong> desta Jornada</label>
        <select id='status' value={status} onChange={event => setStatus(Number(event.target.value))}>
          <option value={1}>Em execução</option>
          <option value={2}>Ativa</option>
          <option value={3}>Configurando</option>
          <option value={4}>Ociosa</option>
          <option value={5}>Concluída</option>
        </select>

        <span>
          <button type="submit">Continuar</button>
          <div onClick={onRequestClose}>Cancel</div>
        </span>
      </Container>
    </Modal>
  );
};
