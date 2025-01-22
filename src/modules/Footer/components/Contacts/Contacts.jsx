import { Typography } from '@/ui/Typography/Typography';
import styles from './Contacts.module.scss';

export const Contacts = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article className={styles.links} key={item.id}>
          <Typography>
            E-mail: <a href={`mailto:${item.email}`} target='_blank'>{item.email}</a>
          </Typography>
          <Typography>
            Адрес: <a href={item.map_link} target='_blank'>{item.company_address}</a>
          </Typography>
          <Typography>
            Телефон: <a href={`tel:${item.phone_number}`} target='_blank'>{item.phone_number}</a>
          </Typography>
        </article>
      ))}
    </>
  );
};
