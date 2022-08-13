import React, {Fragment, useState} from "react";
import ActionButton from "../ActionButton";
import ConfirmDialog from "../dialog/ConfirmDialog";

interface Params {
  resetFn: () => void;
}

const ResetButton = (params: Params) => {
  const [isOpen, setIsOpen] = useState(false);

  const openConfirm = () => {
    setIsOpen(true);
  };

  const confirmAction = () => {
    params.resetFn();
    setIsOpen(false);
  };

  const confirmCancel = () => {
    setIsOpen(false);
  };

  return <Fragment>
    <ConfirmDialog text="Do you want to proceed?" open={isOpen} action={confirmAction} cancel={confirmCancel}></ConfirmDialog>
    <ActionButton onClick={openConfirm}>Reset</ActionButton>
  </Fragment>
}

export default ResetButton
