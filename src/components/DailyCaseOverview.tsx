import React from 'react';
import { Card, H2, H3, H4 } from '@blueprintjs/core';
import styles from './DailyCaseOverview.module.css';

interface IReportProps {
  value: number;
  name: string;
  dif: number;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Report = ({ value, name, dif }: IReportProps) => (
  <div className={styles.report}>
    <H2>{value}</H2>
    <H3>{capitalize(name)}</H3>
    <H4>
      {dif} new
      {name}
    </H4>
  </div>
);

export interface IDailyCaseOverviewProps {
  title: string;
  vals: IReportProps[];
}

export const DailyCaseOverview = ({ title, vals }: IDailyCaseOverviewProps) => (
  <Card className={styles.report_card}>
    <H2>{title}</H2>
    <div className={styles.report_container}>
      {vals.map(({ dif, name, value }) => (
        <Report dif={dif} name={name} value={value} />
      ))}
    </div>
  </Card>
);
