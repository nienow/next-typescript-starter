import React, {Fragment} from "react";
import ActionButton from "../ActionButton";
import {useDialog} from "../../providers/DialogProvider";
import AlertDialog from "../dialog/AlertDialog";

interface Params {
  resetFn: () => void;
  count: number;
}

// let root;
const ResetButton = (params: Params) => {
  const {confirm, dialog} = useDialog();

  const openConfirm = () => {
    confirm('Do you want to reset?', params.resetFn);
  };

  const openAlert = () => {
    dialog(<AlertDialog text={'The count is ' + params.count}></AlertDialog>);
  };

  return <Fragment>
    <ActionButton onClick={openConfirm}>Reset</ActionButton>
    <ActionButton onClick={openAlert}>Alert</ActionButton>
  </Fragment>
}

export default ResetButton
