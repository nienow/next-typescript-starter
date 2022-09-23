import {createContext, useContext, useState} from "react";

const translations = {
  es: {
    helloWorld: 'Hola Mundo',
    reset: 'Reiniciar',
    alert: 'Alerta',
    countDisplay: 'El conteo es {count}'
  },
  de: {
    helloWorld: 'Hallo Welt',
    reset: 'Zurücksetzen'
  }
};

const I18nContext = createContext({t: null, setLocale: null});
export const useI18n = () => useContext(I18nContext);

const I18nProvider = ({children}) => {
  const [t, setT] = useState(null);

  const setLocale = (locale: string) => {
    setT(translations[locale] || {});
  };

  return (
    <I18nContext.Provider value={{t, setLocale}}>
      {children}
    </I18nContext.Provider>
  )
};

export default I18nProvider;
