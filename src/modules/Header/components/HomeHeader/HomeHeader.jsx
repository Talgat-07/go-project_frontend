import styles from './HomeHeader.module.scss'
import { Link } from 'react-router-dom'
import logo from '@/app/assets/icons/homeLogo.svg'
import { Typography } from '@/ui/Typography/Typography'
import { FaWhatsapp } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import React, { useEffect, useState } from 'react'
import { SwitchButton } from '@/ui/SwitchButton/SwitchButton'
import { ContactsStorage } from '@/app/Storage/Storage'

export const HomeHeader = () => {
  const [bgColor, setBgColor] = useState(
    'linear-gradient(to bottom, #000 10%,rgba(0, 0, 0, 0.26) 85%, rgba(0, 0, 0, 0))',
  )
  const [color, setColor] = useState('')
  const [boxShadow, setBoxShadow] = useState('')
  const [textShadow, setTextShadow] = useState('')
  const [position] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 740) {
        setBgColor('white')
        setColor('black')
        setBoxShadow('0px 0px 6px black')
        setTextShadow('none')
      } else {
        setBgColor(
          'linear-gradient(to bottom, #000 10%,rgba(0, 0, 0, 0.26) 85%, rgba(0, 0, 0, 0))',
        )
        setColor('white')
        setBoxShadow('none')
        setTextShadow('2px 3px 3px #000')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { contactsData, contactsRequest } = ContactsStorage()

  useEffect(() => {
    contactsRequest()
  }, [contactsRequest])

  return (
    <header
      className={styles.navbar}
      style={{ background: bgColor, top: position, boxShadow: boxShadow }}
    >
      {contactsData.map((item) => (
        <section className={styles.contactsSection} key={item.id}>
          <div className={styles.phoneBlock}>
            <FaWhatsapp
              style={{ color: color }}
              size={'24px'}
              className={styles.icon}
            />
            <Typography
              variant='a'
              href={`tel:${item.phone_number}`}
              color={color}
            >
              {item.phone_number}
            </Typography>
          </div>
          <div className={styles.phoneBlock}>
            <SlLocationPin
              style={{ color: color }}
              size={'24px'}
              className={styles.icon}
            />
            <Typography
              color={color}
              variant='a'
              href={item.map_link}
              target='_blank'
            >
              {item.company_address}
            </Typography>
          </div>
        </section>
      ))}
      <section className={styles.centerSection}>
        <div className={styles.logo}>
          <Link to={'/'} target='_top'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className={styles.navigationList}>
          <Link to={'/tours'} style={{ color: color, textShadow: textShadow }}>
            Туры
          </Link>
          <Link to={'*'} style={{ color: color, textShadow: textShadow }}>
            О нас
          </Link>
          <Link
            to={'/visa-support'}
            style={{ color: color, textShadow: textShadow }}
          >
            Визы
          </Link>
          <Link
            to={'/delivery'}
            style={{ color: color, textShadow: textShadow }}
          >
            Доставка товаров
          </Link>
          <Link to={'*'} style={{ color: color, textShadow: textShadow }}>
            Отзывы
          </Link>
        </div>
      </section>
      <SwitchButton maxWidth='208px' padding='10px 20px' variant='animation_3'>
        Задать вопрос
      </SwitchButton>
    </header>
  )
}
