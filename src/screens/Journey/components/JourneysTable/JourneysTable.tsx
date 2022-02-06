import React, { useEffect, useState } from 'react';
import Filter from '../Filters/Filter';
import { api } from 'src/services/api';

import { BiSend } from 'react-icons/bi'

import { Container } from './styles';
import { COLORS } from '@themes/colors';
import { FiCheck, FiPlayCircle } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';

type TableProps = {
  name: string;
  status: number;
  recipients: string;
  success: string;
  id: string;
}

export const JourneysTable: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [filters, setFilters] = useState<any[]>([]);

  const icons = [
    BsGrid3X3Gap, 
    BiSend, 
    FiPlayCircle, 
    BsPencil, 
    IoBedOutline, 
    FiCheck
  ];
  const colors = [
    COLORS.ICON_PINK, 
    COLORS.ICON_KHAKI, 
    COLORS.ICON_GREEN, 
    COLORS.ICON_BLUE, 
    COLORS.ICON_ORANGE, 
    COLORS.ICON_GRAY
  ];

  useEffect(() => {
    api.get('/filter')
      .then(response => {
        const filters = response.data;
        setFilters(filters)
      })
  }, []);

  useEffect(() => {
    api.get('/journey')
      .then(response => {
        const items= response.data;
        setItems(items);
      })
  }, []);

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
          
          {items.map(({status, name, recipients, success, id}: TableProps) => {
            const Icon = icons[status];

            return (
              <tr key={id}>
                <td>{name}</td> 
                <td>{recipients}</td>
                <td>{success}</td>
                <td>
                <Filter 
                  key={id} 
                  id={status}
                  icon={<Icon color={colors[status]}/>} 
                  name={filters[status].name} 
                />
                </td>
              </tr>
                )
          })}
                
        </tbody>
      </table>
    </Container>
  );
};
