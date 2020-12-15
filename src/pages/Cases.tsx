import { useParams } from 'react-router-dom';
import { Container, Grid, Message } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { CaseChart } from '../components/CaseChart';
import { CaseStatistics } from '../components/CaseStatistics';
import styles from './Cases.module.css';
import axios from '../utils/axios';
import { capitalize } from '../utils/utils';

export interface ICase {
  confirmedChange: number;
  confirmedToday: number;
  countryRegion: string;
  deathsChange: number;
  deathsToday: number;
  entryDate: Date;
  recoveredChange: number;
  recoveredToday: number;
}

interface ICasesParams {
  country: string;
}

export const Cases = () => {
  const { country } = useParams<ICasesParams>();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState<any>(null);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
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
          setIsLoading(false);
        },
        (err) => {
          setIsLoading(false);
          setError(err);
        }
      );
  }, []);

  if (isLoading) return <div>Loading</div>;

  return (
    <Container className={styles.main_container}>
      {error && (
        <Message negative>
          <Message.Header>Error: {error.message}</Message.Header>
        </Message>
      )}

      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={8}>
            <CaseStatistics
              title={`${country ? capitalize(country) : 'Worldwide'} Cases`}
              values={
                cases.length > 0
                  ? [
                      cases[cases.length - 1].confirmedToday,
                      cases[cases.length - 1].deathsToday,
                      cases[cases.length - 1].recoveredToday
                    ]
                  : [0, 0, 0]
              }
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CaseChart title="Total Cases" values={cases} dataKey="today" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CaseChart title="New Cases" values={cases} dataKey="change" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
