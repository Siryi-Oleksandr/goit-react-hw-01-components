import styled from '@emotion/styled';

export const FriendContainer = styled.div`
  width: 500px;
  margin-bottom: 32px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 8px; */
`;

export const FriendItem = styled.li`
  padding: 16px;
  width: 100%;

  display: flex;
  gap: 30px;
  justify-content: start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 8px;
`;

export const FriendsList = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
