import React, { useContext } from 'react';

import { FiltersContext } from 'src/FiltersContext';

import { Container } from './styles';
import Filter from '../Filters/Filter';

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
