import React from 'react';

import { BiRocket, BiAnalyse } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { IoMdLogOut } from 'react-icons/io'
import { IoDiamondOutline } from 'react-icons/io5'
import { VscTools, VscArrowSwap } from 'react-icons/vsc'

import { ROUTES } from 'src/routes/routes';

import Homepage from './components/Homepage';
import Item from './components/Item';
import LogoutButton from './components/LogoutButton';
import { Container } from './styles';
import ThemeSwitch from './components/ThemeSwitch';

type Props = {
  onClick: () => void;
}

export const Sidebar = ({ onClick }: Props) => {

  return (
    <Container>
      <Homepage router={ROUTES.HOME} />
      <div className="navigation">
        <div>
          <Item name="Análises" router={ROUTES.ANALYTICS} icon={<BiAnalyse />} />
          <Item name="Jornadas" router={ROUTES.JOURNEY} icon={<BiRocket />} />
          <Item name="Clientes" router={ROUTES.CLIENTS} icon={<FiUsers />} />
          <Item name="CCM Clouds" router={ROUTES.CCMCLOUD} icon={<AiOutlineCloudServer />} />        
        </div>
        <span className="separator" />
        <div>
          <ThemeSwitch onClick={onClick}/>
        </div>
        <span className="separator" />
        <div>
          <Item name="Administração" router={ROUTES.ADMIN} icon={<IoDiamondOutline />} />
          <Item name="Help Desk" router={ROUTES.HELP} icon={<VscTools />} />
          <Item name="Trocar Conta" router={ROUTES.ACCOUNTS} icon={<VscArrowSwap />} />
          <LogoutButton name="Sair" icon={<IoMdLogOut />} />
        </div>
      </div>
    </Container>
  );
};
