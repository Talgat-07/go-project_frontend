import styles from './Breadcrumbs.module.scss'
import { Typography } from '../Typography/Typography'
import { useTranslation } from 'react-i18next'
import { BreadcrumbsArrow } from '@/app/assets/icons/BreadcrumbsArrow'
import { MultiContainer } from '../Multicontainer/Multicontainer'
import { NavLink } from "react-router-dom"
import { generateBreadcrumbs } from '@/utils/helpers/helpers'

export const Breadcrumbs = ({ breadcrumbKey, thirdElement }) => {
  const { t } = useTranslation()
  const breadcrumbs = generateBreadcrumbs(
    breadcrumbKey,
    thirdElement,
    t,
  )

  return (
    <MultiContainer>
      <nav aria-label="breadcrumbs">
        <ul className={styles.breadcrumbsContainer}>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              {breadcrumb.route ? (
                <NavLink className={styles.link} to={breadcrumb.route}>
                  <Typography truncate={50} variant="fs16">
                    {breadcrumb.text}
                  </Typography>
                  {index < breadcrumbs.length - 1 && <BreadcrumbsArrow />}
                </NavLink>
              ) : (
                <Typography truncate={50} variant="fs16" color="#FF6600">
                  {breadcrumb.text}
                </Typography>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </MultiContainer>
  )
}