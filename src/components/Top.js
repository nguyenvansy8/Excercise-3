import React from "react";
import styled from "styled-components";
import IosShareIcon from "@mui/icons-material/IosShare";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";

const SideBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  position: absolute;
  width: 200px;
  flex: 1;
`;

const Image = styled.image`
  display: flex;
  position relative;
  height: 40px;
  width: 50px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Infor = styled.div`
  gap: 5px;
  margin-left: 10px;
  position: relative;
`;

const Name = styled.div`
  font-weight: bold;
`;

const UserName = styled.div``;

const Left = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  margin-left: 300px;
  gap: 10px;
`;

const Top = () => {
  return (
    <>
      <SideBar>
        <Right>
          <Image>
            <img src="https://wallpaperaccess.com/full/2159510.jpg" alt="img"/>
            <Infor>
              <Name>Sy</Name>
              <UserName>@Sy</UserName>
            </Infor>
          </Image>
        </Right>
        <Left>
          <IosShareIcon />
          <SystemUpdateAltIcon />
          <NotificationsIcon />
        </Left>
      </SideBar>
    </>
  );
};

export default Top;
