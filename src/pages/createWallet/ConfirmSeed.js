import React from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { dataConfirm } from "../../data";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

const Border = styled.div``;

// const Button = styled.button`
//   border-radius: 20px;
//   border: 1px solid #ffffff;
//   background-color: red;
//   margin: 10px 0 5px 30px;
//   height: 50px;
//   width: 60px;
//   cursor: pointer;

//   &:hover {
//     border: 2px solid #bbcffb;
//     background-color: #bbcffb;
//   }
// `;

const Button = styled.button`
  border-radius: 20px;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: #e5e5e5;
  margin: 10px 0 5px 30px;
  height: 80px;
  width: 350px;
  word-spacing: 30px;
  cursor: pointer;

  &:hover {
    border: 2px solid #bbcffb;
    background-color: #bbcffb;
  }
`;

const Bound = styled.div`
  background-color: blue;
  color: white;
  margin-left: 20px;
  height: 30px;
  width: 10px;
`;

const BottomComponent = styled.div`
  background-color: red;
  height: 30vh;
  background-color: #e5e5e5;
`;

const ViewWork = styled.div`
  display: flex;
  color: #04004d;
  justify-content: space-between;
  margin: 20px 20px 10px 20px;
`;

const BtnSubmit = styled.button`
  color: white;
  font-size: 20px;
  background-color: #004dff;
  align-items: center;
  width: 365px;
  margin: 0 0 0 20px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid #004dff;
`;

const ConfirmSeed = () => {
  const navigate = useNavigate();

  const handleSubmitChange = () => {
    Swal.fire({
      title: "<h5>Your wallet has been created!</h5>",
      icon: "success",
      html:
        '<h8><input type="checkbox" /> Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.</h8><p>' +
        '<h8><input type="checkbox" /> Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.</h8><p>' +
        '<h8><input type="checkbox" /> To keep your backup file safe, you should also keep secret your back up location and secure it.</h8>',
      confirmButtonText: "I UNDERSTAND",
    });
  };

  const handleBackClick = () => {
    navigate("/create");
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
        <Top>Confirm Your Seed Phrase?</Top>
        <Center>
          {dataConfirm.map((items, i) => (
            <Button name={items.list} key={i}>
              {items.list}
            </Button>
          ))}
        </Center>
      </CenterComponent>
      <BottomComponent>
        <ViewWork>
          How does this work?
          <Icon>
            <ChevronRightIcon />
          </Icon>
        </ViewWork>
        <BtnSubmit onClick={handleSubmitChange}>SUMIT</BtnSubmit>
      </BottomComponent>
    </>
  );
};

export default ConfirmSeed;
