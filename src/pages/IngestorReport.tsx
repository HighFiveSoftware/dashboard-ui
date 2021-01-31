import React from 'react';
import { Table } from 'semantic-ui-react';
import { RouteComponentProps } from '@reach/router';
import ingestorReports from '../data/ingestorReports.json';

// eslint-disable-next-line no-unused-vars
export const IngestorReport = (props: RouteComponentProps) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Count</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {ingestorReports.map(
        ({ success, ingestionDate, ingestedCount, ingestionTime }) => (
          <Table.Row positive={success} negative={!success}>
            <Table.Cell>{ingestionDate}</Table.Cell>
            <Table.Cell>{ingestedCount}</Table.Cell>
            <Table.Cell>{ingestionTime} minutes</Table.Cell>
          </Table.Row>
        )
      )}
    </Table.Body>
  </Table>
);
