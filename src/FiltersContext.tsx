import{ createContext, useEffect, useState } from 'react'
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