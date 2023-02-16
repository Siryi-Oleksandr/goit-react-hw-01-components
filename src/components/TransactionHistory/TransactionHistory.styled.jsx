import styled from '@emotion/styled';

export const TransactionContainer = styled.div`
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

export const Table = styled.table`
  min-width: 600px;
  margin: 0 auto;
  padding: 16px;
  table-layout: fixed;

  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 8px;
`;

export const TableHead = styled.thead`
  background-color: #3c88df;

  th {
    padding: 16px;
    width: calc(100% / 3);
    text-transform: uppercase;
    color: #fff;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
`;

export const TableBody = styled.tbody`
  tr {
    text-align: center;
    padding: 16px;
    color: gray;
    text-transform: capitalize;

    &:nth-of-type(2n) {
      background-color: #cccccc90;
    }
  }

  td {
    padding: 8px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
`;
