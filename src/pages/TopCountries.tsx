import { RouteComponentProps } from '@reach/router';
import { Card, Message } from 'semantic-ui-react';
import { TopCountryTable } from '../components/TopCountryTable';
import { useTopCountries } from '../hooks/useTopCountries';

export const TopCountries = (_props: RouteComponentProps) => {
  const [topCountries, error, loading] = useTopCountries();

  if (loading) return <div>Loading</div>;

  return (
    <div>
      {error && (
        <Message negative>
          <Message.Header>Error: {error.message}</Message.Header>
        </Message>
      )}

      <Card fluid>
        <Card.Content>
          <Card.Header>Top Countries</Card.Header>
        </Card.Content>
        <TopCountryTable topCases={topCountries} />
      </Card>
    </div>
  );
};
