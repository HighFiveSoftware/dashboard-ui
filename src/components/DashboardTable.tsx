import React from 'react';
import { useTable } from 'react-table';
import { Table } from 'semantic-ui-react';
import { ITopCountry } from '../interfaces/TopCountry';

interface IDashboardTableProps {
  topCases: ITopCountry[];
}

export const DashboardTable = ({ topCases }: IDashboardTableProps) => {
  const data = React.useMemo<ITopCountry[]>(() => topCases, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Country',
        accessor: 'countryRegion' as keyof ITopCountry
      },
      {
        Header: 'Cases',
        accessor: 'confirmedToday' as keyof ITopCountry
      },
      {
        Header: 'Deaths',
        accessor: 'deathsToday' as keyof ITopCountry
      },
      {
        Header: 'Recoveries',
        accessor: 'recoveredToday' as keyof ITopCountry
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <Table {...getTableProps()}>
      <Table.Header>
        {headerGroups.map((headerGroup) => (
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Table.HeaderCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </Table.Body>
    </Table>
  );
};
