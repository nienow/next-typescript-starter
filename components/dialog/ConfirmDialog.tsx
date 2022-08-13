import React from 'react';
import SimpleDialog from "./SimpleDialog";
import ActionButton from "../ActionButton";
import styled from "styled-components";

interface Params {
  text: string;
  open?: boolean;
  action: () => void;
  cancel: () => void;
}

const ButtonBar = styled.div`
  display: flex;
`;

const ConfirmDialog = (params: Params) => {
  return (
    <SimpleDialog open={params.open}>
      <div>{params.text}</div>
      <ButtonBar>
        <ActionButton onClick={params.action}>OK</ActionButton>
        <ActionButton onClick={params.cancel}>Cancel</ActionButton>
      </ButtonBar>
    </SimpleDialog>
  );
}

export default ConfirmDialog
