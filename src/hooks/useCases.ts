import { useEffect, useState } from 'react';
import { ICase } from '../interfaces/Case';
import axios from '../utils/axios';

export const useCases = (country?: string): [ICase[], any, boolean] => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState<ICase[]>([]);

  useEffect(() => {
    axios
      .get<ICase[]>('/cases/', {
        params: country ? { country } : {}
      })
      .then(
        (result) => {
          const sortedCases = result.data
            .map((c) => ({
              ...c,
              entryDate: new Date(`${c.entryDate}Z`)
            }))
            .sort((a, b) => a.entryDate.getTime() - b.entryDate.getTime());
          setCases(sortedCases);
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          setError(err);
        }
      );
  }, []);

  return [cases, error, loading];
};
