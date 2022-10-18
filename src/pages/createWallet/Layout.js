import React, { useState } from "react";
import styled from "styled-components";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TopComponent = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const CenterComponent = styled.div``;

const Top = styled.div`
  color: #004dff;
  font-weigth: 500;
  margin: 20px 0 10px 20px;
`;

const Center = styled.div``;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ffffff;
  background-color: #e5e5e5;
  margin: 10px 0 5px 30px;
  height: 50px;
  width: 100px;
  cursor: pointer;

  &:hover {
    border: 2px solid #bbcffb;
    background-color: #bbcffb;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #bbcffb;
  `}
`;

const Bottom = styled.div`
  display: flex;
  color: #04004d;
  font-weight: 400;
  margin: 20px 20px 20px 20px;
`;

const BottomComponent = styled.div``;

const ViewWork = styled.div`
  display: flex;
  color: #04004d;
  justify-content: space-between;
  margin: 10px 20px 10px 20px;
`;

const BtnNext = styled.button`
  color: white;
  font-size: 20px;
  background-color: #004dff;
  align-items: center;
  width: 365px;
  margin: 0 0 0 20px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid #004dff;
  cursor: pointer;
`;

const Layout = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate(selected);

  const handleSaveClick = () => {
    let timerInterval;
    Swal.fire({
      title: "Saved to clipboard",
      icon: "success",
      html: "<strong></strong>s<br/><br/>",
      timer: 2000,
      showConfirmButton: false,
      didOpen: () => {
        timerInterval = setInterval(() => {
          Swal.getHtmlContainer().querySelector("strong").textContent = (
            Swal.getTimerLeft() / 1000
          ).toFixed(0);
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };

  const handleButtonClick = () => {
    navigate("/confirm");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSelectButton = (id) => {
    const isSelected = selected.includes(id);
    setSelected((prev) => {
      if (isSelected) {
        return selected.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <>
      <TopComponent>
        <Icon onClick={handleBackClick}>
          <ArrowBackIosOutlinedIcon />
        </Icon>
        Create New Wallet
      </TopComponent>
      <CenterComponent>
        <Top>Auto Gen Seed Phrase?</Top>
        <Center>
          {data.map((items, i) => {
            return (
              <>
                <Button key={i} onClick={() => handleSelectButton(items.index)}>
                  {items.name}
                </Button>
              </>
            );
          })}
        </Center>
        <Bottom>
          Tap to Copy or Carefully write down your seed phrase and store it in a
          safe place
          <Icon>
            <FileCopyIcon onClick={handleSaveClick} />
          </Icon>
        </Bottom>
      </CenterComponent>
      <BottomComponent>
        <ViewWork>
          How does this work?
          <Icon>
            <ChevronRightIcon />
          </Icon>
        </ViewWork>
        <BtnNext onClick={handleButtonClick}>NEXT</BtnNext>
      </BottomComponent>
    </>
  );
};

export default Layout;
