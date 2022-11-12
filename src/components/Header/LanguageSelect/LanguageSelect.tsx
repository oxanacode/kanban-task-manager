import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from '../../../types/LanguageOptions';
import { LocalStorageKeys } from '../../../types/LocalStorageKeys';
import { getValueLocalStorage } from '../../../utils/getValueLocalStorage';
import { setValueLocalStorage } from '../../../utils/setValueLocalStorage';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [selectValue, setValue] = useState(getValueLocalStorage(LocalStorageKeys.locale) || Language.en);

  useEffect(() => {
    i18n.changeLanguage(getValueLocalStorage(LocalStorageKeys.locale) || Language.en);
  }, [i18n]);

  const handleChange = (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null) => {
    const value = (event?.target as HTMLElement).textContent;
    setValue(selectValue);

    if (value === Language.ruCyrillic) {
      i18n.changeLanguage(Language.ru);
      setValueLocalStorage(LocalStorageKeys.locale, Language.ru);
    } else {
      i18n.changeLanguage(Language.en);
      setValueLocalStorage(LocalStorageKeys.locale, Language.en);
    }
  };

  return (
    <Select color={'primary'} defaultValue={selectValue} onChange={handleChange}>
      <Option value="ru">Ру</Option>
      <Option value="en">En</Option>
    </Select>
  );
};
