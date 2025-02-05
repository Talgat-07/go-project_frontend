import React from 'react'
import styles from './Modal.module.scss'
import { ModalClose } from '@/app/assets/icons/ModalClose'

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <ModalClose />
        </button>
        {children}
      </div>
    </div>
  )
}
