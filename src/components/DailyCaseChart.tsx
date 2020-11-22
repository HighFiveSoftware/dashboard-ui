import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts';
import { Card, H2 } from '@blueprintjs/core';
import styled from 'styled-components';
import { Data } from '../utils/dataGenerator';

const CaseChartCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
`;

// maybe use stroke too
const CustomXAxisTick = ({ x, y, payload }: any) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
      {payload.value}
    </text>
  </g>
);

export interface DailyCaseChartProps {
  title: string;
}

export const DailyCaseChart = ({ title }: DailyCaseChartProps) => (
  <CaseChartCard elevation={2} className="daily-case-chart">
    <H2>{title}</H2>
    <ResponsiveContainer>
      <LineChart
        width={730}
        height={250}
        data={Data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="name" tick={<CustomXAxisTick />} interval={0} />
        <YAxis orientation="right" axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend verticalAlign="bottom" iconType="circle" />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#80bdfd"
          dot={false}
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8eefc1"
          dot={false}
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="zv"
          stroke="#ffd085"
          dot={false}
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  </CaseChartCard>
);
