import React from 'react';
import styled from 'styled-components';
import { DailyCaseChart } from './components/DailyCaseChart';
import { DailyCaseOverview } from './components/DailyCaseOverview';

const MainContainer = styled.div`
  max-width: 85%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  /* align-content: space-around; */
`;

const TopRow = styled.div``;

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const vals = [
  {
    name: 'confirmed',
    value: 1000,
    dif: 10
  },
  {
    name: 'recoveries',
    value: 1000,
    dif: 10
  },
  {
    name: 'deaths',
    value: 1000,
    dif: 10
  }
];

const App: React.FC = () => {
  return (
    <MainContainer>
      <TopRow>
        <DailyCaseOverview title="Worldwide Cases" vals={vals} />
      </TopRow>
      <ChartsContainer>
        <DailyCaseChart title="New Cases" />
        <DailyCaseChart title="Total Cases" />
      </ChartsContainer>
    </MainContainer>
  );
};

export default App;
