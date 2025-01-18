import { Typography } from '@/ui/Typography/Typography'
import styles from './Contacts.module.scss'

export const Contacts = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article className={styles.links} key={item.id}>
          <Typography variant='a' href={`mailto:${item.email}`}>
            E-mail: {item.email}
          </Typography>
          <Typography variant='a' href={item.map_link} target='_blank'>
            Адрес: {item.company_address}
          </Typography>
          <Typography variant='a' href={`tel:${item.phone_number}`}>
            Телефон: {item.phone_number}
          </Typography>
        </article>
      ))}
    </>
  )
}
