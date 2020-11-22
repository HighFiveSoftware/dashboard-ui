import React from 'react';
import { Card, H2, H3, H4 } from '@blueprintjs/core';
import styled from 'styled-components';

interface IReportProps {
  value: number;
  name: string;
  dif: number;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const StyledReport = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Report = ({ value, name, dif }: IReportProps) => (
  <StyledReport>
    <H2>{value}</H2>
    <H3>{capitalize(name)}</H3>
    <H4>
      {dif} new
      {name}
    </H4>
  </StyledReport>
);

export interface IDailyCaseOverviewProps {
  title: string;
  vals: IReportProps[];
}

const Reports = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReportsCard = styled(Card)`
  max-width: 50%;
`;

export const DailyCaseOverview = ({ title, vals }: IDailyCaseOverviewProps) => (
  <ReportsCard>
    <H2>{title}</H2>
    <Reports>
      {vals.map(({ dif, name, value }) => (
        <Report dif={dif} name={name} value={value} />
      ))}
    </Reports>
  </ReportsCard>
);
