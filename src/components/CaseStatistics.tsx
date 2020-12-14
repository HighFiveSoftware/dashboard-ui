import { Statistic, Card } from 'semantic-ui-react';
import styles from './CaseStatistics.module.css';

export interface IDailyCaseOverviewProps {
  title: string;
  values: number[];
}

export const CaseStatistics = ({ title, values }: IDailyCaseOverviewProps) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content as="div" className={styles.statistics_container}>
      <Statistic.Group size="tiny">
        <Statistic>
          <Statistic.Value>{values[0].toLocaleString()}</Statistic.Value>
          <Statistic.Label>Confirmed</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{values[1].toLocaleString()}</Statistic.Value>
          <Statistic.Label>Deaths</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{values[2].toLocaleString()}</Statistic.Value>
          <Statistic.Label>Recovered</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Card.Content>
  </Card>
);
