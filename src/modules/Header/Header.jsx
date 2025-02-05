import { Logo } from '@/ui';
import { Navigation } from './components/Navigation/Navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { Typography } from '@/ui';
import styles from './Header.module.scss';
import { SwitchButton } from '@/ui';
import { MultiContainer } from '@/ui';
import { SwitchLanguage } from './components/SwithchLanguage/SwitchLanguage';
import { PATH } from '@/utils/constants/constants';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from '@/utils/hooks/useForm';
import { useEffect } from 'react';

export const Header = ({ contactsData }) => {
  const location = useLocation();
  const isHomePage = location.pathname === PATH.home;

  const { formShow } = useForm();

  // useEffect(() => {
  //   formShow();
  // }, []);

  const textColor = isHomePage ? '#fff' : '#000';

  const contacts = [
    {
      icon: <FaWhatsapp size={'24px'} style={{ color: textColor }} />,
      text: contactsData[0]?.phone_number || '+996(700)777 777',
      link: `tel: ${contactsData[0]?.phone_number || '+996(700)777 777'}`,
    },
    {
      icon: <SlLocationPin size={'24px'} style={{ color: textColor }} />,
      text: contactsData[0]?.company_address || 'ул. Жукеева - Пудовкина 44/1',
      link: contactsData[0]?.map_link || '',
    },
  ];

  return (
    <header className={`${styles.header} ${isHomePage && styles.isHomePage}`}>
      <MultiContainer>
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <div className={styles.contactBlock}>
              {contacts.map((item, index) => (
                <div key={index} className={styles.block}>
                  {item.icon}
                  <a href={item.link} target='_blank'>
                    <Typography variant='fs16' color={textColor}>
                      {item.text}
                    </Typography>
                  </a>
                </div>
              ))}
            </div>
            <Link to={PATH.home} target='_top' className={styles.logo}>
              <Logo color={textColor} />
            </Link>
            <div className={styles.activeBlock}>
              <SwitchButton maxWidth='208px' onClick={formShow}>
                Задать вопрос
              </SwitchButton>
              <SwitchLanguage color={textColor} />
            </div>
          </div>
          <div className={styles.nav}>
            <Navigation />
          </div>
        </div>
      </MultiContainer>
    </header>
  );
};
