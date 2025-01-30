import React from "react";

export const loadComponent = (path, componentName) => {
  return React.lazy(() =>
    path().then(module => ({ default: module[componentName] })));
};

export const scrollToTop = (behavior = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};

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