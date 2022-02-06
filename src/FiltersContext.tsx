import { COLORS } from '@themes/colors';
import{ createContext, useEffect, useState } from 'react'
import { BiSend } from 'react-icons/bi';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';
import { FiPlayCircle, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { api } from './services/api';

type FilterProps = {
  id: number;
  name: string;
  quantity: number;
  icon: React.ComponentProps<any>;
  color: string;
}

type FiltersProviderProps = {
  children: React.ReactNode;
}

export const FiltersContext = createContext<FilterProps[]>([]);

export function FiltersProvider({children}: FiltersProviderProps) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    api.get('/filter')
      .then(response => {
        const filters = response.data;
        setFilters(filters);
      })
  }, []);

  return (
    <FiltersContext.Provider value={filters}>
      {children}
    </FiltersContext.Provider>
  )

}