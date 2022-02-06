import { COLORS } from '@themes/colors';
import{ createContext, useEffect, useState } from 'react'
import { BiSend } from 'react-icons/bi';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';
import { FiPlayCircle, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { api } from './services/api';

type FilterProps = {
  filters?: Array<any>;
  items?: Array<any>;
  setItems?: (event:any) => void,
}

type FiltersProviderProps = {
  children: React.ReactNode;
}

export const FiltersContext = createContext<FilterProps>({});

export function FiltersProvider({children}: FiltersProviderProps) {
  const [filters, setFilters] = useState([]);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    api.get('/journey')
      .then(response => {
        setItems(response.data);
      });

    api.get('/filter')
    .then(response => {
      setFilters(response.data);
    })
  }, []);

  return (
    <FiltersContext.Provider value={{ filters, items, setItems }}>
      {children}
    </FiltersContext.Provider>
  )

}