import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer} role='contentinfo'>
      <section className={styles.routesSection}>
        <ul className={styles.navigationList}>
          <li>Каталог туров</li>
          <li>Визовая поддержка - VisaGO</li>
          <li>Доставка товаров из Китая - EasyGO</li>
        </ul>
      </section>
    </footer>
  )
}
