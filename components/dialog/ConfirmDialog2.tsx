import React from 'react';
import SimpleDialog from "./SimpleDialog";
import ActionButton from "../ActionButton";
import styled from "styled-components";
import {createRoot} from "react-dom/client";

interface Params {
  text: string;
  action: () => void;
  cancel: () => void;
}

const ButtonBar = styled.div`
  display: flex;
`;

let root;

const closeDialog = () => {
  if (root) {
    root.unmount();
    root = undefined;
  }
}

export const openConfirmDialog2 = (text: string, action: () => void) => {
  root = createRoot(document.getElementById('dialog-container'));
  root.render(<ConfirmDialog2 text={text} action={() => {
    action();
    closeDialog();
  }} cancel={closeDialog}></ConfirmDialog2>);
};

// export const openDialog2 = (children) => {
//   root = createRoot(document.getElementById('dialog-container'));
//   root.render(<SimpleDialog open={true}>{children}</SimpleDialog>);
// };

const ConfirmDialog2 = (params: Params) => {
  return (
    <SimpleDialog open={true}>
      <div>{params.text}</div>
      <ButtonBar>
        <ActionButton onClick={params.action}>OK</ActionButton>
        <ActionButton onClick={params.cancel}>Cancel</ActionButton>
      </ButtonBar>
    </SimpleDialog>
  );
}

export default ConfirmDialog2
