import {createContext, useContext, useState} from 'react';
import ConfirmDialog from "../components/dialog/ConfirmDialog";

// interface DialogOptions {
//   text: string;
//   action: () => void;
// }

interface IDialogContext {
  confirm: (text: string, action: () => void) => void;
}

const DialogContext = createContext<IDialogContext>({
  confirm: null
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({children}) => {
  const [options, setOptions] = useState(null);

  const confirm = (text, action) => {
    setOptions({text, action});
  };

  const confirmAction = () => {
    options.action();
    setOptions(null);
  };

  const confirmCancel = () => {
    setOptions(null);
  };

  return (
    <>
      <DialogContext.Provider value={{confirm}}>
        {children}
      </DialogContext.Provider>
      <ConfirmDialog text={options?.text} action={confirmAction} cancel={confirmCancel} open={!!options}></ConfirmDialog>
    </>
  );
};
