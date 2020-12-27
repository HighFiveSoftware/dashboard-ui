import { RouteComponentProps } from '@reach/router';
import { Card, Container, Grid, Message } from 'semantic-ui-react';
import { CaseChart } from '../components/CaseChart';
import { CaseStatistics } from '../components/CaseStatistics';
import styles from './Cases.module.css';
import { useCases } from '../hooks/useCases';
import { DashboardTable } from '../components/DashboardTable';
import { useTopCountries } from '../hooks/useTopCountries';

// eslint-disable-next-line no-unused-vars
export const WorldwideCases = (props: RouteComponentProps) => {
  const [cases, error, loading] = useCases();
  const [topCountries, error2, loading2] = useTopCountries();

  if (loading || loading2) return <div>Loading</div>;

  return (
    <Container className={styles.main_container}>
      {error && (
        <Message negative>
          <Message.Header>Error: {error.message}</Message.Header>
        </Message>
      )}
      {error2 && (
        <Message negative>
          <Message.Header>Error: {error2.message}</Message.Header>
        </Message>
      )}

      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={8}>
            <CaseStatistics
              title="Worldwide Cases"
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
            <Card fluid>
              <Card.Content>
                <Card.Header>Top Countries</Card.Header>
              </Card.Content>
              {/* <Card.Content> */}
              <DashboardTable topCases={topCountries} />
              {/* </Card.Content> */}
            </Card>
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
