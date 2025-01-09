import styles from './HomeHeader.module.scss'
import { Link } from 'react-router-dom'
import logo from '@/app/assets/icons/logo.svg'
import { Typography } from '@/ui/Typography/Typography'
import { FaWhatsapp } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import React, { useEffect, useState } from 'react'

export const HomeHeader = () => {
  const [bgColor, setBgColor] = useState('')
  const [color, setColor] = useState('')
  const [boxShadow, setBoxShadow] = useState('')
  const [textShadow, setTextShadow] = useState('')
  const [position] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setBgColor('white')
        setColor('black')
        setBoxShadow('0px 0px 6px black')
        setTextShadow('none')
      } else {
        setBgColor('linear-gradient(to bottom, #000, #ffffff00)')
        setColor('white')
        setBoxShadow('none')
        setTextShadow('2px 3px 3px #000')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={styles.navbar}
      style={{ background: bgColor, top: position, boxShadow: boxShadow }}
    >
      <section className={styles.contactsSection}>
        <div className={styles.phoneBlock}>
          <FaWhatsapp
            style={{ color: color }}
            size={'24px'}
            className={styles.icon}
          />
          <Typography variant='a' href='tel:+9960706789678' color={color}>
            +996(700)777 777
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
            href='https://2gis.kg/bishkek/firm/70000001044298822/tab/services?m=74.613883%2C42.826555%2F16%2Fp%2F0.94%2Fr%2F-0.19'
            target='_blank'
          >
            ул. Жукеева - Пудовкина 44/1
          </Typography>
        </div>
      </section>
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
      <Typography variant='button' className={styles.formBtn}>
        Задать вопрос
      </Typography>
    </header>
  )
}
