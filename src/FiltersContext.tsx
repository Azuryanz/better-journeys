import{ createContext, useEffect, useRef, useState } from 'react'
import { api } from './services/api';

type FilterProps = {
  filters?: Array<any>;
  items?: Array<any>;
  state?: any;
  currentFilter?: any;
  setItems?: (event:any) => void,
}

type FiltersProviderProps = {
  children: React.ReactNode;
}

export const FiltersContext = createContext<FilterProps>({});

export function FiltersProvider({children}: FiltersProviderProps) {
  const [filters, setFilters] = useState([]);
  const [items, setItems] = useState<any[]>([]);
  const state = useRef<boolean[]>([true, false, false, false, false, false])
  const currentFilter = useRef<number>(0);

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
    <FiltersContext.Provider value={{ filters, items, setItems, state, currentFilter }}>
      {children}
    </FiltersContext.Provider>
  )

}