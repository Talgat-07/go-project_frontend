import { Typography } from '@/ui/Typography/Typography';
import { useState } from 'react';
import { useOutsideClick } from 'utils/hooks/useOutsideClick';
import style from './SwitchLanguage.module.scss';
import { ArrowDown } from '@/app/assets/icons/ArrowDown';
import i18n from '@/utils/i18n/i18n';

export const SwitchLanguage = ({ color = "#000" }) => {
  const options = [
    { value: 'ru', label: 'РУС' },
    { value: 'en', label: 'ENG' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    options.find(option => option.value === i18n.language) || options[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = newLanguage => {
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(
      options.find(option => option.value === newLanguage),
    );
    window.location.reload();
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  const dropdownRef = useOutsideClick(() => setIsOpen(false));

  return (
    <div ref={dropdownRef} className={style.block}>
      <div className={style.dropdown} onClick={toggleDropdown}>
        <Typography className={style.label} color={color}>
          {selectedLanguage.label}
        </Typography>
        <span
          className={`${style.arrow} ${isOpen ? style.up : ''}`}
          style={{ marginLeft: '2px' }}
        >
          <ArrowDown className={style.icon} color={color} />
        </span>
      </div>
      <ul className={`${style.changeLang} ${isOpen ? style.show : ''}`}>
        {options.map(option => (
            <li key={option.value}>
              <div
                className={style.lang}
                onClick={() => {
                  handleLanguageChange(option.value);
                  closeDropdown();
                }}
              >
                <Typography>{option.label}</Typography>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
