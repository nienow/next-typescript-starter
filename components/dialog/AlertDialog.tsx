import React from 'react';
import ActionButton from "../ActionButton";
import styled from "styled-components";
import {useDialog} from "../../providers/DialogProvider";

// interface Params {
//   text: string;
//   closeDialog: () => void;
// }

const ButtonBar = styled.div`
  display: flex;
`;

export const openAlertDialog = (text: string) => {
  const {dialog} = useDialog();
  const onOK = () => {
    close();
  };

  const close = dialog(
    <>
      <div>{text}</div>
      <ButtonBar>
        <ActionButton onClick={onOK}>OK</ActionButton>
      </ButtonBar>
    </>
  );
}

const AlertDialog = ({text, closeDialog}) => {
  const onOK = () => {
    closeDialog();
  };

  return (
    <>
      <div>{text}</div>
      <ButtonBar>
        <ActionButton onClick={onOK}>OK</ActionButton>
      </ButtonBar>
    </>
  );
}

export default AlertDialog;
