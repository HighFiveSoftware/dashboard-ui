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
import { format, isValid } from 'date-fns';
import { ICase } from '../interfaces/Case';
import { capitalize } from '../utils/utils';

const FormatAxis = (tickItem: Date) => {
  if (isValid(tickItem)) {
    return format(tickItem, 'MM/dd/yyyy');
  }
  return 'NaN';
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
              /* istanbul ignore next */
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
