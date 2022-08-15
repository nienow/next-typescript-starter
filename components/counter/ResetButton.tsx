import React, {Fragment, useState} from "react";
import ActionButton from "../ActionButton";
import ConfirmDialog from "../dialog/ConfirmDialog";
import {openConfirmDialog2} from "../dialog/ConfirmDialog2";
import {useDialog} from "../../providers/DialogProvider";

interface Params {
  resetFn: () => void;
}

// let root;
const ResetButton = (params: Params) => {
  const [isOpen, setIsOpen] = useState(false);
  const {confirm} = useDialog();

  const openConfirm = () => {
    setIsOpen(true);
  };

  const openConfirm2 = () => {
    openConfirmDialog2('Do you want to reset?', params.resetFn);
    // root = createRoot(document.getElementById('dialog-container'));
    // root.render(<ConfirmDialog2 text="Hello World" action={confirmAction2} cancel={confirmCancel2}></ConfirmDialog2>);
  };

  const openConfirm3 = () => {
    confirm('Do you want to reset?', params.resetFn);
  };

  const confirmAction = () => {
    params.resetFn();
    setIsOpen(false);
  };

  const confirmCancel = () => {
    setIsOpen(false);
  };

  // const confirmAction2 = () => {
  //   params.resetFn();
  //   root.unmount();
  //   root = undefined;
  // };
  //
  // const confirmCancel2 = () => {
  //   root.unmount();
  //   root = undefined;
  // };

  return <Fragment>
    <ConfirmDialog text="Do you want to reset?" open={isOpen} action={confirmAction} cancel={confirmCancel}></ConfirmDialog>
    <ActionButton onClick={openConfirm}>Reset</ActionButton>
    <ActionButton onClick={openConfirm2}>Reset2</ActionButton>
    <ActionButton onClick={openConfirm3}>Reset3</ActionButton>
  </Fragment>
}

export default ResetButton
