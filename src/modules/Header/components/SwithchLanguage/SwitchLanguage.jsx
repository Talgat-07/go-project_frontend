import { Typography } from '@/ui';
import { useState } from 'react';
import styles from './SwitchLanguage.module.scss';
import i18n from '@/utils/i18n/i18n';
import { Globe } from '@/app/assets/icons/Globe';

export const SwitchLanguage = ({ color = "#000" }) => {
  const options = [
    { value: 'ru', label: 'РУС' },
    { value: 'en', label: 'ENG' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    options.find(option => option.value === i18n.language) || options[0],
  );

  const toggleLanguage = () => {
    const newLanguage = selectedLanguage.value === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(options.find(option => option.value === newLanguage));
    window.location.reload();
  };

  return (
    <div className={styles.block} onClick={toggleLanguage}>
      <Globe className={styles.icon} color={color}/>
      <Typography variant="fs16" className={styles.label} color={color}>
        {selectedLanguage.label}
      </Typography>
    </div>
  );
};
