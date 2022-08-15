import React, {createContext, ReactNode, useContext, useState} from 'react';
import SimpleDialog from "../components/dialog/SimpleDialog";
import ActionButton from "../components/ActionButton";

// interface DialogOptions {
//   text: string;
//   action: () => void;
// }

interface IDialogContext {
  confirm: (text: string, action: () => void) => () => void;
  dialog: (contents: ReactNode) => () => void;
  closeDialog: () => void;
}

const DialogContext = createContext<IDialogContext>({
  confirm: null,
  dialog: null,
  closeDialog: null
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({children}) => {
  const [contents, setContents] = useState(null);

  const confirm = (text, action) => {
    // setOptions({text, action});
    setContents(
      <>
        <div>{text}</div>
        <ActionButton onClick={() => {
          action();
          closeDialog();
        }}>OK</ActionButton>
        <ActionButton onClick={closeDialog}>Cancel</ActionButton>
      </>
    );
    return closeDialog;
  };

  const dialog = (contents) => {
    setContents(contents);
    return closeDialog;
  };

  const closeDialog = () => {
    setContents(null);
  }

  return (
    <>
      <DialogContext.Provider value={{confirm, dialog, closeDialog}}>
        {children}
      </DialogContext.Provider>
      <SimpleDialog open={!!contents}>{contents}</SimpleDialog>
    </>
  );
};
