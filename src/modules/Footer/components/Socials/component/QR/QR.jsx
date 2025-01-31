import styles from './QR.module.scss'

export const QR = ({ contactsData }) => {

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
