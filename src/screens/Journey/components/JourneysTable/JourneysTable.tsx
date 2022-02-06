import React, { useContext, useEffect, useState } from 'react';
import Filter from '../Filters/Filter';
import { api } from 'src/services/api';

import { BiSend } from 'react-icons/bi'

import { Container } from './styles';
import { COLORS } from '@themes/colors';
import { FiCheck, FiPlayCircle } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';
import { FiltersContext } from 'src/FiltersContext';

type TableProps = {
  name: string;
  status: number;
  recipients: string;
  success: string;
  id: string;
}

export const JourneysTable: React.FC = () => {
  const {items} = useContext(FiltersContext)
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Destinatários</th>
            <th>Sucesso</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          
          {items?.map(({status, name, recipients, success, id}: TableProps) => {
            return (
              <tr key={id}>
                <td>{name}</td> 
                <td>{recipients}</td>
                <td>{success}</td>
                <td>
                  <Filter id={status} disabled={true}/>
                </td>
              </tr>
            )
          })}
                
        </tbody>
      </table>
    </Container>
  );
};
