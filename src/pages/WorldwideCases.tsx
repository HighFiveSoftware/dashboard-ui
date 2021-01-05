import { RouteComponentProps } from '@reach/router';
import { Grid, Message } from 'semantic-ui-react';
import { CaseChart } from '../components/CaseChart';
import { CaseStatistics } from '../components/CaseStatistics';
import { useCases } from '../hooks/useCases';

// eslint-disable-next-line no-unused-vars
export const WorldwideCases = (props: RouteComponentProps) => {
  const [cases, error, loading] = useCases();

  if (loading) return <div>Loading</div>;

  return (
    <div>
      {error && (
        <Message negative>
          <Message.Header>Error: {error.message}</Message.Header>
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
            <CaseChart title="Total Cases" values={cases} dataKey="today" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CaseChart title="New Cases" values={cases} dataKey="change" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
