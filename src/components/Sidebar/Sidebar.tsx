import React from 'react';

import { BiRocket, BiAnalyse } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { IoMdLogOut } from 'react-icons/io'
import { IoDiamondOutline } from 'react-icons/io5'
import { VscTools, VscArrowSwap } from 'react-icons/vsc'

import { ROUTES } from 'src/routes/routes';

import Item from './components/Item';
import Homepage from './components/Homepage';
import { Container } from './styles';
import ThemeSwitch from './components/ThemeSwitch';

type Props = {
  theme?: string;
  onClick: () => void;
}

export const Sidebar = ({ theme, onClick }: Props) => {
  return (
    <Container>
      <Homepage router={ROUTES.HOME} />
      <div className="navigation">
        <div className="content">
          <Item name="Análises" theme={theme} router={ROUTES.ANALYTICS} icon={<BiAnalyse />} />
          <Item name="Jornadas" theme={theme} router={ROUTES.JOURNEY} icon={<BiRocket />} />
          <Item name="Clientes" theme={theme} router={ROUTES.CLIENTS} icon={<FiUsers />} />
          <Item name="CCM Clouds" theme={theme} router={ROUTES.CCMCLOUD} icon={<AiOutlineCloudServer />} />        
        </div>
        <div className="content">
          <ThemeSwitch onClick={onClick}/>
        </div>
        <div>
          <Item name="Administração" theme={theme} router={ROUTES.ADMIN} icon={<IoDiamondOutline />} />
          <Item name="Help Desk" theme={theme} router={ROUTES.HELP} icon={<VscTools />} />
          <Item name="Trocar Conta" theme={theme} router={ROUTES.ACCOUNTS} icon={<VscArrowSwap />} />
          <Item name="Sair" theme={theme} router={ROUTES.LOGIN} icon={<IoMdLogOut />}/>
        </div>
      </div>
    </Container>
  );
};
