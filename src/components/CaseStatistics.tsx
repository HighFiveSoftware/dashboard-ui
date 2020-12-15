import { Statistic, Card } from 'semantic-ui-react';
import styles from './CaseStatistics.module.css';

export interface IDailyCaseOverviewProps {
  title: string;
  values: number[];
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short'
  }).format(num);
};

export const CaseStatistics = ({ title, values }: IDailyCaseOverviewProps) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content as="div" className={styles.statistics_container}>
      <Statistic.Group size="small">
        <Statistic>
          <Statistic.Value>{formatNumber(values[0])}</Statistic.Value>
          <Statistic.Label>Confirmed</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{formatNumber(values[1])}</Statistic.Value>
          <Statistic.Label>Deaths</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{formatNumber(values[2])}</Statistic.Value>
          <Statistic.Label>Recovered</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Card.Content>
  </Card>
);
