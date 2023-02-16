import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  width: 500px;
  margin-bottom: 32px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 500;
  color: grey;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  width: 100%;
  padding: 5px;
  display: flex;
`;

export const StatisticsItem = styled.li`
  width: calc(100% / ${props => props.stats.length});
  padding: 10px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid black;
  background-color: #cccccc; // reserve bg color
`;
