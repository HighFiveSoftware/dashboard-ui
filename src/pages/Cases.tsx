import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { DailyCaseChart } from '../components/DailyCaseChart';
import { DailyCaseOverview } from '../components/DailyCaseOverview';
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
    <div className={styles.main_container}>
      <div>
        <DailyCaseOverview title="Worldwide Cases" vals={vals} />
      </div>
      <div className={styles.charts_container}>
        <DailyCaseChart title="New Cases" />
        <DailyCaseChart title="Total Cases" />
      </div>
    </div>
  );
};
