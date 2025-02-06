import { Typography } from '@/ui'
import styles from './Delivery.module.scss'
import { DeliveryBlockApi } from '../../api/DeliveryBlockApi'
import { useEffect } from 'react'
import { SwitchButton } from '@/ui'
import { Heading } from '@/ui'
import { Link } from 'react-router-dom'
import { PATH } from '@/utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const Delivery = () => {
  const { t } = useTranslation()
  const { deliveryData, deliveryRequest } = DeliveryBlockApi()

  useEffect(() => {
    deliveryRequest()
  }, [deliveryRequest])

  if (!deliveryData.length) {
    return null
  }

  return (
    <section className={styles.deliverySection}>
      <Heading text={t("headings.deliveryEasyGo")} />
      {deliveryData.map((item) => (
        <div className={styles.deliveryBanner} key={item.id}>
          <div className={styles.img}>
            <img src={item.image} alt='background image' />
            <div className={styles.overlay} />
          </div>
          <div className={styles.frame}>
            <Typography variant='h2' weight='fw5' className={styles.title}>
              {item.title}
            </Typography>
            <Typography variant='h3' weight='fw4' className={styles.desc}>
              {item.description}
            </Typography>
            <Link to={PATH.delivery} target='_top'>
              <SwitchButton maxWidth='195px'>
                {t("buttons.more")}
              </SwitchButton>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
