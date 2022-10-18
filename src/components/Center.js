import React from "react";
import styled from "styled-components";

const CenterComponent = styled.div`
  color: red;
`;
const TopComponent = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const Tab = styled.div`
  cursor: pointer;
  color: ${(props) => props.color};
`;

const TopBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid red;
  cursor: pointer;
  margin: 5px;
  background-color: ${(props) => props.color};
`;

const RightComponent = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    border: 2px solid red;
  }
`;

const Infor = styled.div`
  color: black;
  margin-top: 20px;
`;

const MidBox = styled.div``;
const BottomBox = styled.div`
  font-weight: bold;
`;

const MidComponent = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: blue;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    border: 2px solid blue;
  }
`;
const LeftComponent = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: green;
  height: 100px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    border: 2px solid green;
  }
`;

const BottomComponent = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Center = () => {
  return (
    <>
      <CenterComponent>
        <TopComponent>
          <Tab color="#04004D">My Wallet</Tab>
          <Tab color="#D3D7DB">Report</Tab>
          <Tab color="#D3D7DB">Setting</Tab>
        </TopComponent>
        <BottomComponent>
          <RightComponent>
            <TopBox color="red"></TopBox>
            <Infor>
              <MidBox>@Meta Wallet</MidBox>
              <BottomBox>1000 MCOIN</BottomBox>
            </Infor>
          </RightComponent>
          <MidComponent>
            <TopBox color="blue"></TopBox>
            <Infor>
              <MidBox>@Meta Wallet</MidBox>
              <BottomBox>1000 MCOIN</BottomBox>
            </Infor>
          </MidComponent>
          <LeftComponent>
            <TopBox color="green"></TopBox>
            <Infor>
              <MidBox>@Meta Wallet</MidBox>
              <BottomBox>1000 MCOIN</BottomBox>
            </Infor>
          </LeftComponent>
        </BottomComponent>
      </CenterComponent>
    </>
  );
};

export default Center;
