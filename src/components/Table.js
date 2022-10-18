import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TableContainer = styled.table``;

const Table = styled.table``;

const TableBody = styled.table``;

const TableRow = styled.table`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const TableCellImage = styled.table``;

const CustomerAndTime = styled.table`
  justify-content: center;
`;

const TableCellCustomer = styled.table`
  display: flex;
  align-items: flex-start;
  font-weight: 600;
  font-size: 19px;
  cursor: pointer;
`;

const TableCellTime = styled.table`
  display: flex;
  align-items: flex-start;
`;

const AmountAndUnit = styled.table`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  //   color: #ff0366;
`;

const TableCellAmount = styled.table`
  color: red;
  &.USDT {
    color: blue;
  }
`;

const TableCellUnit = styled.table``;

const Image = styled.image`
  height: 10px;
  width: 20px;
`;

const List = () => {
  const rows = [
    {
      id: 1,
      customer: "John Smith",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: -785,
      time: "3 hours ago",
      unit: "USDT",
    },
    {
      id: 2,
      customer: "Michael Doe",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 900,
      time: "3 hours ago",
      unit: "MCOIN",
    },
    {
      id: 3,
      customer: "John Smith",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 935,
      time: "3 hours ago",
      unit: "MCOIN",
    },
    {
      id: 4,
      customer: "Jane Smith",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      amount: -920,
      time: "3 hours ago",
      unit: "USDT",
    },
    {
      id: 5,
      customer: "Harold Carol",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 2000,
      time: "3 hours ago",
      unit: "USDT",
    },
    {
      id: 6,
      customer: "John Smith",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: -785,
      time: "3 hours ago",
      unit: "USDT",
    },
    {
      id: 7,
      customer: "Michael Doe",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 900,
      time: "3 hours ago",
      unit: "MCOIN",
    },
    {
      id: 8,
      customer: "John Smith",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 935,
      time: "3 hours ago",
      unit: "MCOIN",
    },
    {
      id: 9,
      customer: "Jane Smith",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      amount: -920,
      time: "3 hours ago",
      unit: "USDT",
    },
    {
      id: 10,
      customer: "Harold Carol",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 2000,
      time: "3 hours ago",
      unit: "USDT",
    },
  ];

  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/create")
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCellImage>
                <Image>
                  <img src={row.img} alt="" width="100px" />
                </Image>
              </TableCellImage>
              <CustomerAndTime>
                <TableCellCustomer onClick={handleChange}>
                  {row.customer}
                </TableCellCustomer>
                <TableCellTime>{row.time}</TableCellTime>
              </CustomerAndTime>
              <AmountAndUnit>
                <TableCellAmount>{row.amount}</TableCellAmount>
                <TableCellUnit>{row.unit}</TableCellUnit>
              </AmountAndUnit>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
