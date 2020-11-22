export function generateIncreasingNumbers(
  increaseRateMin: number,
  increaseRateMax: number,
  count: number
): number[] {
  const numbers = [];
  let lastNumber = 0;

  for (let i = 0; i < count; i += 1) {
    numbers.push(lastNumber);
    const rand = Math.floor(
      Math.random() * (increaseRateMax - increaseRateMin) + increaseRateMin
    );
    lastNumber = Math.max(lastNumber + rand, 0);
  }

  return numbers;
}

export const Data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    zv: 1000,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    zv: 1100,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    zv: 1200,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    zv: 1300,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    zv: 1400,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    zv: 1500,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    zv: 1600,
    amt: 2100
  }
];
