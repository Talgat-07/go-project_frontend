import { ContactsStorage } from '@/app/Storage/Storage'
import styles from './QR.module.scss'
import { useEffect } from 'react'

export const QR = () => {
  const { contactsData, contactsRequest } = ContactsStorage()

  useEffect(() => {
    contactsRequest()
  }, [contactsRequest])

  return (
    <>
      {contactsData.map((item) => (
        <div className={styles.qrCode} key={item.id}>
          <img src={item.pictogram} alt='qr code' />
        </div>
      ))}
    </>
  )
}
