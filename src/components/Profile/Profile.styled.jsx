import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 500px;
  padding: 15px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 8px;
`;

export const ProfileStats = styled.ul`
  width: 100%;
  padding: 5px;
  display: flex;
`;

export const ProfileStatsItem = styled.li`
  width: calc(100% / 3);
  padding: 10px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #ccc;
  background-color: #cccccc99;
`;

export const ProfileDesc = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
export const UserTag = styled.p`
  font-size: 24px;
  color: grey;
`;
export const UserLocation = styled.p`
  font-size: 24px;
  color: grey;
`;
export const StatsQuantty = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: grey;
`;
