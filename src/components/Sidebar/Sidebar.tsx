/* eslint-disable prettier/prettier */
import React from 'react';
import {
  BiHomeAlt,
  BiWorld,
  BiRocket,
  BiBrain,
  BiBulb,
  BiAward,
  BiBook,
} from 'react-icons/bi';

import { ROUTES } from 'src/routes/routes';

import Item from './components';
import { Container } from './styles';

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <div>
        <Item text="Inicio" router={ROUTES.HOME} icon={<BiHomeAlt />} />
        <Item text="Análises" router={ROUTES.ANALYTICS} icon={<BiRocket />} />
        <Item text="Jornadas" router={ROUTES.JOURNEY} icon={<BiWorld />} />
        <Item active text="Clientes" router={ROUTES.CLIENTS} icon={<BiBrain />} />
        <Item text="CCM Cloud" router={ROUTES.CCMCLOUD} icon={<BiBulb />} />
        <Item text="Administração" router={ROUTES.ADMIN} icon={<BiAward />} />
        <Item text="Help Desk" router={ROUTES.HELP} icon={<BiBook />} />
        <Item text="Trocar Conta" router={ROUTES.ACCOUNTS} icon={<BiBook />} />
      </div>
      <Item text="Sair" router={ROUTES.LOGIN} />
    </Container>
  );
};
