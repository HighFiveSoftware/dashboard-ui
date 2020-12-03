import React from 'react';
import { Statistic, Card } from 'semantic-ui-react';
import styles from './DailyCaseStatistics.module.css';

interface IReportProps {
  value: number;
  name: string;
  dif: number;
}

export interface IDailyCaseOverviewProps {
  title: string;
  vals: IReportProps[];
}

export const DailyCaseStatistics = ({
  title,
  vals
}: IDailyCaseOverviewProps) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content as="div" className={styles.statistics_container}>
      <Statistic.Group>
        {vals.map(({ dif, name, value }) => (
          <Statistic dif={dif} name={name} value={value}>
            <Statistic.Value>{value}</Statistic.Value>
            <Statistic.Label>{name}</Statistic.Label>
            {/* <Statistic.Value text>{`${dif} new ${name}`}</Statistic.Value> */}
          </Statistic>
        ))}
      </Statistic.Group>
    </Card.Content>
  </Card>
);
