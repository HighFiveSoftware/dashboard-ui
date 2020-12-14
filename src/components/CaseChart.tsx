import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts';
import { Card } from 'semantic-ui-react';
import { format } from 'date-fns';
import { ICase } from '../pages/Cases';
import { capitalize } from '../utils/utils';
// import styles from './CaseChart.module.css';

// maybe use stroke too
// const CustomXAxisTick = ({ x, y, payload }: any) => (
//   <g transform={`translate(${x},${y})`}>
//     <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
//       {format(payload.value, 'MM/dd/yyyy')}
//     </text>
//   </g>
// );

const FormatAxis = (tickItem: Date) => {
  return format(tickItem, 'MM/dd/yyyy');
};

export interface DailyCaseChartProps {
  title: string;
  values: ICase[];
  dataKey: string;
}

export const CaseChart = ({ title, values, dataKey }: DailyCaseChartProps) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content style={{ height: '300px' }}>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={values}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis
            dataKey="entryDate"
            // tick={<CustomXAxisTick />}
            tickFormatter={FormatAxis}
            interval="preserveStartEnd"
            // tickCount={5}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={10}
            tickFormatter={(tick) => {
              return tick.toLocaleString();
            }}
            allowDataOverflow
          />
          <Tooltip />
          <Legend verticalAlign="bottom" iconType="circle" />
          <Line
            type="monotone"
            dataKey={`confirmed${capitalize(dataKey)}`}
            stroke="#80bdfd"
            dot={false}
            strokeWidth={4}
          />
          <Line
            type="monotone"
            dataKey={`recovered${capitalize(dataKey)}`}
            stroke="#8eefc1"
            dot={false}
            strokeWidth={4}
          />
          <Line
            type="monotone"
            dataKey={`deaths${capitalize(dataKey)}`}
            stroke="#ffd085"
            dot={false}
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card.Content>
  </Card>
);
