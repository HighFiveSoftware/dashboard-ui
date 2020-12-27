import { useEffect, useState } from 'react';
import { ITopCountry } from '../interfaces/TopCountry';
import axios from '../utils/axios';

export type SortBy =
  | 'confirmed_today'
  | 'deaths_today'
  | 'recovered_today'
  | 'confirmed_change'
  | 'deaths_change'
  | 'recovered_change';

export const useTopCountries = (
  country?: string,
  sortBy?: SortBy
): [ITopCountry[], any, boolean] => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [topCountries, setTopCountries] = useState<ITopCountry[]>([]);

  useEffect(() => {
    axios
      .get<ITopCountry[]>('/cases/topCountries/', {
        params: sortBy ? { sortBy } : {}
      })
      .then(
        (result) => {
          const sortedCases = result.data.map((c) => ({
            ...c,
            entryDate: new Date(`${c.entryDate}Z`)
          }));
          setTopCountries(sortedCases);
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          setError(err);
        }
      );
  }, []);

  return [topCountries, error, loading];
};
