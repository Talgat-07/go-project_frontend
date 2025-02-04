import React from "react"
import { breadcrumbs } from "@/utils/constants/constants"

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