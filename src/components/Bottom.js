import React from "react";
import styled from "styled-components";
import List from "./Table";

const TopComponent = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Tab = styled.div`
  cursor: pointer;
  color: ${(props) => props.color};
`;

const MidComponent = styled.div``;

const BottomComponent = styled.div``;

const Bottom = () => {
  return (
    <>
      <BottomComponent>
        <TopComponent>
          <Tab color="#04004D">Transactions</Tab>
          <Tab color="#D3D7DB">Pending</Tab>
        </TopComponent>
        <MidComponent>
          <List />
        </MidComponent>
        <BottomComponent></BottomComponent>
      </BottomComponent>
    </>
  );
};

export default Bottom;
