import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';

export const LanguageSelect = () => {
  return (
    <Select color={'primary'} defaultValue="en">
      <Option value="ru">Ru</Option>
      <Option value="en">En</Option>
    </Select>
  );
};
