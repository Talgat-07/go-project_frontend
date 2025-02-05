import React from "react"
import { breadcrumbs } from "@/utils/constants/constants"
import * as yup from 'yup'

export const loadComponent = (path, componentName) => {
  return React.lazy(() =>
    path().then(module => ({ default: module[componentName] })))
}

export const scrollToTop = (behavior = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior,
  })
}

export const scrollToSection = (navigate, sectionId) => {
  navigate('/')

  setTimeout(() => {
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionRect = section.getBoundingClientRect()
      const offset = window.innerHeight / 2 - sectionRect.height / 2
      const top = sectionRect.top + window.scrollY - offset

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }, 200)
}

export const generateBreadcrumbs = (key, thirdElement = null, t) => {
  const breadcrumbItem = breadcrumbs.find((item) => item.key === key)
  if (!breadcrumbItem) return []

  const baseBreadcrumbs = [
    {
      text: t("home"),
      route: "/",
    },
  ]

  baseBreadcrumbs.push({
    text: t(breadcrumbItem.label),
    route: breadcrumbItem.route || null,
  })

  if (thirdElement) {
    baseBreadcrumbs.push({
      text: thirdElement,
      route: null,
    })
  }

  return baseBreadcrumbs
}

export const getPlainText = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html")
  return doc.body.textContent || ""
}

export const validationSchema = yup.object({
  name: yup.string().trim().required('Введите имя'),
  phone: yup
    .string()
    .trim()
    .matches(/^\+?[0-9\s\-()]{7,15}$/, 'Некорректный номер телефона')
    .required('Введите номер телефона'),
  message: yup.string().max(200, 'Максимум 200 символов'),
  policy: yup.boolean().oneOf([true], 'Необходимо согласие с политикой'),
})

export const handlePhoneChange = (e, setFieldValue) => {
  const { value } = e.target
  const formattedValue = value.replace(/[^0-9+\s\-()]/g, '').slice(0, 13)
  setFieldValue('phone', formattedValue)
}
