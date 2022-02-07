import React, { useEffect, useState } from 'react';
import Switch from "react-switch";

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { Container } from './styles';

type Props = {
  onClick: () => void;
}

export const ThemeSwitch = ({ onClick }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
    onClick();
  }

  return (
    <Container>
      <MdOutlineLightMode className={checked ? "modeOff" : "modeOn"} size={22} />
      <span>
        <Switch
          onChange={handleChange}
          checked={checked}
          offColor="#E4E6F1"
          offHandleColor="#232136"
          onColor="#232136"
          onHandleColor="#E4E6F1"
          className="react-switch"
          aria-label="Theme switch"
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
        />
      </span>
      <MdOutlineDarkMode className={checked ? "modeOn" : "modeOff"} size={22} />
    </Container>
  );
};
