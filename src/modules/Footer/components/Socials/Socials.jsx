import styles from './Socials.module.scss';
import { Link } from 'react-router-dom';
import { QR } from './component/QR/QR';
import { WhappIcon } from '@/app/assets/icons/WhappIcon';
import { TgIcon } from '@/app/assets/icons/TgIcon';
import { TtIcon } from '@/app/assets/icons/TtIcon';

export const Socials = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const socials = [
          { icon: <WhappIcon />, link: `${item.partners_whatsapp}` },
          { icon: <TgIcon />, link: `${item.telegram_link}` },
          { icon: <TtIcon />, link: `${item.tiktok_link}` },
        ];

        return (
          <div className={styles.qrBlock} key={item.id}>
            <QR />
            <div className={styles.iconsContainer}>
              {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <div>{social.icon}</div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
