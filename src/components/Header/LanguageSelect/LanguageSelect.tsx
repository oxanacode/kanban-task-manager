import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import { useTranslation } from 'react-i18next';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null) => {
    const value = (event?.target as HTMLElement).textContent?.toLocaleLowerCase();

    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <Select color={'primary'} defaultValue={navigator.language.split('-')[0]} onChange={handleChange}>
      <Option value="ru">Ru</Option>
      <Option value="en">En</Option>
    </Select>
  );
};
