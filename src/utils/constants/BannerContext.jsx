import React, { createContext, useState, useEffect } from 'react'

export const BannerContext = createContext()

export const BannerProvider = ({ children }) => {
  const [isOnBanner, setIsOnBanner] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector('._banner_s4xg9_1')
      const header = document.querySelector('._navbar_1jcat_8 ')
      if (banner && header) {
        const bannerRect = banner.getBoundingClientRect()
        const headerRect = header.getBoundingClientRect()
        setIsOnBanner(headerRect.bottom <= bannerRect.bottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <BannerContext.Provider value={isOnBanner}>
      {children}
    </BannerContext.Provider>
  )
}
