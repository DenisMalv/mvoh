import styled from "@emotion/styled";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  background-color: #7b7b7b;
  border-spacing: 0;
`;
export const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background-color: #262626;
  color: #fff;
`;
export const TableBody = styled.tbody`
  background-color: #fff;
`;
export const TableRow = styled.tr``;
export const TableData = styled.td`
  width: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  &.isOnline {
    color: #ff8a65;
  }
`;

// .transactionHistorySection {
//   margin: 10px auto;
//   width: 300px;
// }
// .transactionHistory {
//   width: 100%;
//   text-align: center;
//   border: 3px solid rgb(0, 162, 255);
//   border-radius: 5px;
//   background-color: rgb(92, 149, 255);
// }
// .transactionHead {
// }
// .transactionBody {
//   background-color: rgb(251, 255, 36);
// }
