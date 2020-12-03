import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { DailyCaseChart } from '../components/DailyCaseChart';
import { DailyCaseStatistics } from '../components/DailyCaseStatistics';
import styles from './Cases.module.css';

const vals = [
  {
    name: 'confirmed',
    value: 1000,
    dif: 10
  },
  {
    name: 'recoveries',
    value: 1000,
    dif: 10
  },
  {
    name: 'deaths',
    value: 1000,
    dif: 10
  }
];

export const Cases = (_props: RouteComponentProps) => {
  return (
    <Container className={styles.main_container}>
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={8}>
            <DailyCaseStatistics title="Worldwide Cases" vals={vals} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DailyCaseChart title="New Cases" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DailyCaseChart title="Total Cases" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
