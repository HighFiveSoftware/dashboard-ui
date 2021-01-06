import { useEffect, useState } from 'react';
import { ICase } from '../interfaces/Case';
import axios from '../utils/axios';

export const useCases = (region?: string): [ICase[], any, boolean] => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState<ICase[]>([]);

  useEffect(() => {
    axios
      .get<ICase[]>('/cases/', {
        params: region ? { country: region } : {}
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
          if (err.response.status === 404) {
            setError('Region not found');
          } else {
            setError(err.message);
          }
        }
      );
  }, [region]);

  return [cases, error, loading];
};
