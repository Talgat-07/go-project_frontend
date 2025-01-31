import { Typography } from '@/ui';
import styles from './Contacts.module.scss';

export const Contacts = ({ data }) => {
  const contacts = [
    {
      name: 'E-mail: ',
      label: data[0]?.email || 'goprogect@gmail.com',
      link: `mailto:${data[0]?.email || 'goprogect@gmail.com'}`,
    },
    {
      name: 'Адрес: ',
      label: data[0]?.company_address || 'ул. Жукеева - Пудовкина 4/1',
      link: data[0]?.map_link || '',
    },
    {
      name: 'Телефон: ',
      label: data[0]?.phone_number || '+996 (706) 789 678',
      link: `tel:${data[0]?.phone_number || '996 (706) 789 678'}`,
    }
  ];

  return (
    <article className={styles.links}>
      {contacts.map((item, index) => (
        <Typography key={index}>
          {item.name}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        </Typography>
      ))}
    </article>
  );
};
